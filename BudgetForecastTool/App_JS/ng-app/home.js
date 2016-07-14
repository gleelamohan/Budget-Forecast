
app.controller('Ctrl', function ($scope, $filter, $http, WindService, ShareData) {
   
   

    $scope.LoadDevices = function () {

        //$scope.$emit('LOAD');
        //var promiseGetStudent = WindService.getDevices();

        //promiseGetStudent.then(function (pl) {
        $scope.users = [];
        var inserted = {
                 projectname: 'tomcat', resourcename: 'Leela', jan: 1, feb: 1, mar: 1, apr: 1, may: 1, jun: 1, jul: 1, aug: 1, sep: 1,oct:1,nov:1,dec:1
        };
        $scope.users.push(inserted);
        var inserted = {
            projectname: 'tomcat', resourcename: 'Leela', jan: 1, feb: 1, mar: 1, apr: 1, may: 1, jun: 1, jul: 1, aug: 1, sep: 1, oct: 1, nov: 1, dec: 1
        };
        $scope.users.push(inserted);
        var inserted = {
            projectname: 'tomcat', resourcename: 'Leela', jan: 1, feb: 1, mar: 1, apr: 1, may: 1, jun: 1, jul: 1, aug: 1, sep: 1, oct: 1, nov: 1, dec: 1
        };
        $scope.users.push(inserted);
        var inserted = {
            projectname: 'tomcat', resourcename: 'Leela', jan: 1, feb: 1, mar: 1, apr: 1, may: 1, jun: 1, jul: 1, aug: 1, sep: 1, oct: 1, nov: 1, dec: 1
        };
        $scope.users.push(inserted);
        var inserted = {
            projectname: 'tomcat', resourcename: 'Leela', jan: 1, feb: 1, mar: 1, apr: 1, may: 1, jun: 1, jul: 1, aug: 1, sep: 1, oct: 1, nov: 1, dec: 1
        };
        $scope.users.push(inserted);
            //$scope.isLoading = false;
        //    $scope.$emit('UNLOAD');
        //},
        //      function (errorPl) {
        //          $scope.error = errorPl;
        //      });
    }

    $scope.LoadHistory = function () {

        var promiseGetStudent = WindService.getDevicesHistory();

        promiseGetStudent.then(function (pl) {
            $scope.usersHistory = pl.data
            $scope.isLoading = false;
        },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    $scope.LoadHistory();

    $scope.LoadDevices();

    $scope.usersAdd = [];
  
    $scope.editAdduser = function (user, b, obj) {
    
           $(".applytr").removeClass("applytr");
        if ($scope.lastSelected) {
            $scope.lastSelected.selected = '';
        }
        this.selected = 'applytr';
        $scope.lastSelected = this;
        if (user.tabId) common = $filter("filter")($scope.users, { tabId: b })
    }

     
  

    $scope.ratePlan = function (data) {
        if (! $.isNumeric(data)) {
            return "Enter only digits.";
        }
    };

    $scope.copyUser = function (b) {

        if (b) var commonAdd = $filter("filter")($scope.usersAdd, { tabId: b })

        if (commonAdd.length > 0) {
            $scope.inserted = {
                tabId: $scope.usersAdd.length + 1,
                imeiStartRange: commonAdd[0]['imeiStartRange'], sku: commonAdd[0]['sku'], creditRating: commonAdd[0]['creditRating'], ratePlanGroup: commonAdd[0]['ratePlanGroup'], deviceName: commonAdd[0]['deviceName'], ratePlanTabLimit1: commonAdd[0]['ratePlanTabLimit1'], ratePlanTabLimit2: commonAdd[0]['ratePlanTabLimit2'], ratePlanTabLimit3: commonAdd[0]['ratePlanTabLimit3'], ratePlanTabLimit4: '0', ratePlanTabLimit5: '0', ratePlanTabLimit6: '0'
            };
            $scope.usersAdd.push($scope.inserted);
        }
        else {
            $scope.inserted = {
                tabId: $scope.usersAdd.length + 1,
                imeiStartRange: '0', sku: '0', creditRating: '', ratePlanGroup: '', deviceName: '', ratePlanTabLimit1: '0', ratePlanTabLimit2: '0', ratePlanTabLimit3: '0', ratePlanTabLimit4: '0', ratePlanTabLimit5: '0', ratePlanTabLimit6: '0'
            };
            $scope.usersAdd.push($scope.inserted);
        }
    };
    $scope.allDisabled = false;
    $scope.saveUser = function (data, id) {

        var promisePutUser = WindService.putDevices(id, data);

        promisePutUser.then(function () {  
            $('#message').html('').prepend('<div class="alert alert-success" style="text-align:center">User Saved Successfully.</div>').show();
            setTimeout(function () {
                $('#message').hide();
            }, 2000);
            $scope.isLoading = false;
        },
              function (errorPl) {
                  $scope.error = errorPl;
              });

    };


    $scope.DeviceList = [];

    $scope.AddNewDevices = function (data) {        
       
        $scope.DeviceList.push(data);
    };

    // remove user
    $scope.removeUser = function (index) {
        $scope.users.splice(index, 1);
        $scope.isLoading = true;
        var promisedelete = WindService.deleteDevices(index);

        promisedelete.then(function (pl) {
            
            $('#message').html('').prepend('<div class="alert alert-success" style="text-align:center">Device details deleted successfully.</div>').show();
            setTimeout(function () {
                $('#message').hide();
            }, 2000);
            $scope.isLoading = false;
        },
              function (errorPl) {
                  $scope.error = errorPl;
              });

    };

    $scope.removeUserAdd = function (index) {
        $scope.usersAdd.splice(index, 1);
    };

    $scope.cancelAdvice = function (rowform, index) {
        //console.log(rowform, index);
        $scope.removeUserAdd(index);
        rowform.$cancel();
    }

    $scope.userstt = [];

    // add user
    $scope.addUser = function () {
        if (common.length > 0) {            

                $scope.inserted = {
                    tabId: $scope.users.length + 1,
                    imeiStartRange: common[0]['imeiStartRange'], sku: common[0]['sku'], creditRating: common[0]['creditRating'], ratePlanGroup: common[0]['ratePlanGroup'], deviceName: common[0]['deviceName'], ratePlanTabLimit1: common[0]['ratePlanTabLimit1'], ratePlanTabLimit2: common[0]['ratePlanTabLimit2'], ratePlanTabLimit3: common[0]['ratePlanTabLimit3'], ratePlanTabLimit4: common[0]['ratePlanTabLimit4'], ratePlanTabLimit5: common[0]['ratePlanTabLimit5'], ratePlanTabLimit6: common[0]['ratePlanTabLimit6']
                };
            $scope.userstt.push($scope.inserted);

        }
        else {
             $scope.inserted = {
                tabId: $scope.users.length + 1,
                imeiStartRange: '0', sku: '0', creditRating: '', ratePlanGroup: '', deviceName: '', ratePlanTabLimit1: '0', ratePlanTabLimit2: '0', ratePlanTabLimit3: '0', ratePlanTabLimit4: '0', ratePlanTabLimit5: '0', ratePlanTabLimit6: '0'
            };
            $scope.userstt.push($scope.inserted);
        }

        //$('a[href="#adddevice"]').trigger("click");
    };

    $scope.saveAll = function () {

        if ($scope.DeviceList.length > 0) {
            //alert($scope.DeviceList.length);
            var promisePutUser = WindService.postDevices($scope.DeviceList);

            promisePutUser.then(function () {
                // $scope.users = pl.data
                
                $('#message').html('').prepend('<div class="alert alert-success" style="text-align:center">Device details added successfully.</div>').show();
                setTimeout(function () {
                    $('#message').hide();
                }, 2000);
                //$('a[href="#home"]').trigger("click");

                window.location.href = "/home"
                $scope.isLoading = false;
            },
                  function (errorPl) {
                      $scope.error = errorPl;
                  });
        }
        else
        {
            alert("Kindly save atleast one Device");
        }



    };
});

//app.run(function ($httpBackend) {
//    $('#myTabs a').click(function (e) {
//        e.preventDefault()
//        $(this).tab('show')
//    })

//});
