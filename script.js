var myApp=angular
          .module("myModule",[])
		  .controller("myController",function($scope){
			 var employees=[
			    {firstName:"Ben",lastName:"Hastling",gender:"male",salary:"55000"},
			    {firstName:"ozan",lastName:"ocak",gender:"male",salary:"65000"},
			    {firstName:"quan",lastName:"liu",gender:"female",salary:"35000"},
			    {firstName:"orhan",lastName:"kalpak",gender:"male",salary:"15000"},
			    {firstName:"sarah",lastName:"Jackline",gender:"female",salary:"50000"}
			 ];
			 $scope.employees=employees;			 		 
			 
			 var countries=[
		       {
				   name:"UK",
				   cities:[
				   {name:"London"},
				   {name:"Manchester"},
				   {name:"Brighton"}
				   ]
			   },
			   {
				   name:"France",
				   cities:[
				   {name:"Paris"},
				   {name:"Lion"},
				   {name:"Marseille"}
				   ]
			   },
			   {
				   name:"Canada",
				   cities:[
				   {name:"Toronto"},
				   {name:"Winnipeg"},
				   {name:"Montreal"}
				   ]
			   }
        ];
		$scope.countries=countries;
			 			 
		 
		  });

