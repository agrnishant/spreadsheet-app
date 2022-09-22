let employees = [
    {
      ID: 1,
      FirstName: "John",
      LastName: "Heart",
      Prefix: "Mr.",
      Position: "CEO",
      Picture: "images/employees/01.png",
      BirthDate: "1964/03/16",
      HireDate: "1995/01/15",
      Notes:
        "John is a dedicated leader",
      Address: "351 S Hill St.",
      State: "California",
      City: "Los Angeles",
      SaleAmount: 11800
    },
    {
      ID: 2,
      FirstName: "Olivia",
      LastName: "Peyton",
      Prefix: "Mrs.",
      Position: "Sales Assistant",
      Picture: "images/employees/09.png",
      BirthDate: "1981/06/03",
      HireDate: "2012/05/14",
      Notes:
        "Olivia is a sales and marketing assistant.",
      Address: "807 W Paseo Del Mar",
      State: "California",
      City: "Los Angeles",
      SaleAmount: 16050
    },
    {
      ID: 3,
      FirstName: "Robert",
      LastName: "Reagan",
      Prefix: "Mr.",
      Position: "CMO",
      Picture: "images/employees/03.png",
      BirthDate: "1974/09/07",
      HireDate: "2002/11/08",
      Notes:
        "Robert has recently been voted the CMO of the year by CMO Magazine.",
      Address: "4 Westmoreland Pl.",
      State: "Arkansas",
      City: "Bentonville",
      SaleAmount: 14750
    },
    {
      ID: 4,
      FirstName: "Greta",
      LastName: "Sims",
      Prefix: "Ms.",
      Position: "HR Manager",
      Picture: "images/employees/04.png",
      BirthDate: "1977/11/22",
      HireDate: "1998/04/23",
      Notes:
        "Greta joined marathon.",
      Address: "1700 S Grandview Dr.",
      State: "Georgia",
      City: "Atlanta",
      SaleAmount: 14800
    },
    {
      ID: 5,
      FirstName: "Brett",
      LastName: "Wade",
      Prefix: "Mr.",
      Position: "IT Manager",
      Picture: "images/employees/05.png",
      BirthDate: "1968/12/01",
      HireDate: "2009/03/06",
      Notes:
        "Brett coaches Little League (he was a high school pitcher).",
      Address: "1120 Old Mill Rd.",
      State: "Idaho",
      City: "Boise",
      SaleAmount: 8200
    },
    {
      ID: 6,
      FirstName: "Sandra",
      LastName: "Johnson",
      Prefix: "Mrs.",
      Position: "Controller",
      Picture: "images/employees/06.png",
      BirthDate: "1974/11/15",
      HireDate: "2005/05/11",
      Notes:
        "Sandra loves to interact with staff.",
      Address: "4600 N Virginia Rd.",
      State: "Utah",
      City: "Beaver",
      SaleAmount: 20400
    },
    {
      ID: 7,
      FirstName: "Kevin",
      LastName: "Carter",
      Prefix: "Mr.",
      Position: "Shipping Manager",
      Picture: "images/employees/07.png",
      BirthDate: "1978/01/09",
      HireDate: "2009/08/11",
      Notes:
        "Kevin is shipping manager.",
      Address: "424 N Main St.",
      State: "California",
      City: "San Diego",
      SaleAmount: 15850
    },
    {
      ID: 8,
      FirstName: "Cynthia",
      LastName: "Stanwick",
      Prefix: "Ms.",
      Position: "HR Assistant",
      Picture: "images/employees/08.png",
      BirthDate: "1985/06/05",
      HireDate: "2008/03/24",
      Notes:
        "Cindy was recently awarded employee of the month.",
      Address: "2211 Bonita Dr.",
      State: "Arkansas",
      City: "Little Rock",
      SaleAmount: 13500
    },
    {
      ID: 9,
      FirstName: "Kent",
      LastName: "Samuelson",
      Prefix: "Dr.",
      Position: "Ombudsman",
      Picture: "images/employees/02.png",
      BirthDate: "1972/09/11",
      HireDate: "2009/04/22",
      Notes:
        "Kent is solving customer problems.",
      Address: "12100 Mora Dr",
      State: "Missouri",
      City: "St. Louis",
      SaleAmount: 23500
    },
    {
      ID: 10,
      FirstName: "Taylor",
      LastName: "Riley",
      Prefix: "Mr.",
      Position: "Network Admin",
      Picture: "",
      BirthDate: "1982/08/14",
      HireDate: "2012/04/14",
      Notes:
        "Taylor does a great job as a member of our IT department.",
      Address: "7776 Torreyson Dr",
      State: "California",
      City: "San Jose",
      SaleAmount: 13200
    }
  ];
  
  export default {
    getEmployees() {
      return employees;
    }
  }
