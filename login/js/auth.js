/**
 * Created by emoimas on 10/15/2015.
 */

angular.module('commonAuthApp',['base64','toaster'])
    .config(function($httpProvider,$locationProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .controller('AuthCtrl',['$base64', '$scope','$window','loginService','toaster','$location',
        function ($base64,$scope,$window,loginService,toaster,$location) {
        $scope.user = {};
        $scope.appList=[];
        $scope.appIcon={
            'cwf_pm.WorkflowAdministration' : "admin.png",
            'cwt_cim.cwt_cim_new.cimMenu' : "default.png",
            'cwtsr_Lib.cwtServiceRegistry' : "default.png",
            'cwa_pscm.mainPscmApp' : "ecm.png",
            'wizard.new_wizard.mnuWizardConfig6' : "default.png",
            'cwtsr_Lib.serviceRegistryApp' : "default.png",
            'on_new.onMenu' : "default.png",
            'cwa_worklist.worklistManagement' : "worklist.png",
            'cwa_security.securityManagement' : "upm.png",
            'cwt_do.unitTest_dataOrder' : "default.png",
            'cwtAddress_lib.cwtAddress_lib_new.addressManagement': "default.png",
            'cwtPartyLib.partyManagement': "default.png",
            'cwt_sof.sofMenu': "default.png",
            'cwa_config.systemConfiguration': "sysconfig.png",
            'cwa_admin.systemAdministration': "sysadmin.png",
            'cwl_subscription.subscriptionConfigurationUI': "sysconfig.png",
            'cwtCust_lib.customerMenu': "default.png",
            'uws_controller.iws': "eoc.png"
        };
        $scope.isLoggedin = false;
        var redirect_url = null;
        if($location.search().callback_url) {
            redirect_url = $location.search().callback_url;
        }
        $scope.onLoginBtnClick = function(){
            var plainAuth = $scope.user.userName + ":" + $scope.user.password;
            var base64Auth = $base64.encode(plainAuth);
            loginService.getToken(base64Auth)
                .success(function (data, status) {
                    $scope.token = data['cwtoken'];
                    loginService.getApps($scope.token)
                        .success(function (data, status) {
                            $scope.appList= data;
                            $scope.user.password = "";
                            if(data && data.length === 1){
                                $scope.onAppClick(data[0]);
                            }else {
                                $scope.isLoggedin = true;
                                toaster.pop("success", "User Login", "User " + $scope.user.userName + " successfully logged in.");
                            }
                        })
                        .error(function (data, status) {
                            toaster.pop("error","Application List","There is no app assigned to user " + $scope.user.userName);
                        });
                })
                .error(function (data, status) {
                    toaster.pop("error","Authentication Header","API user " + $scope.user.userName +" or password is not valid");
                });
        };
        $scope.onLogoutBtnClick = function(){
            $scope.isLoggedin = false;
            $scope.user = {};
        };
        $scope.onAppClick = function(app){
            $scope.user = {};
            var url = app.url+ "?access_token=" +$scope.token;
            if(app.url.indexOf("http://") === -1 && app.url.indexOf("https://") === -1) {
                //for deployment
                url = loginService.getAvmURL()+app.url + "?access_token=" + $scope.token;

                //for DEVELOPMENT
                //url = "/" + app.url + "?access_token=" + $scope.token;
            }

            if(redirect_url) {
                url += "&redirect_url=" + encodeURIComponent(redirect_url);
            }
            $window.location = url;
        }
    }])
    .service('loginService', function ($http) {
        var avmUrl =  'http://localhost:8080/cwf'; // UWS Controller/AVM url
        return {
            getToken : function(base64Auth){
                return $http({
                    method : "GET",
                    url : avmUrl + "/avmSecurity/getToken",
                    headers : {
                        Authorization: "Basic " + base64Auth
                    }
                });
            },
            getApps : function(token){
                return $http({
                    method : "GET",
                    url : avmUrl + "/cwfApplication/",
                    headers : {
                        Authorization : "Bearer " + token
                    }
                });
            },
            getAvmURL : function(){
                return avmUrl;
            }
        };
    });
