import { useContext } from "react";

import { EmployeeContext } from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout";

import { EmployeeCardContainer, Print, Label, EmployeeData, NotFound } from "./styles";
import  { UserDataProps } from "pages/EmployeeApp/components/EmployeeLayout/types"

function EmployeeCard() {
  const { userData } = useContext(EmployeeContext);
  console.log(userData);

  const employeeCards = userData.map((employee: UserDataProps) => {
    return(
      <EmployeeCardContainer>
        <Print>
          <Label>Name</Label>
          <EmployeeData>{employee.name}</EmployeeData>
        </Print>
        <Print>
          <Label>Surname</Label>
          <EmployeeData>{employee.surname}</EmployeeData>
        </Print>
        <Print>
          <Label>Age</Label>
          <EmployeeData>{employee.age}</EmployeeData>
        </Print>
        <Print>
          <Label>Job Position</Label>
          <EmployeeData>{employee.jobPosition}</EmployeeData>
        </Print>
  </EmployeeCardContainer>
    )
  })

  return <>{userData.length > 0 ? employeeCards : <NotFound>Users not found</NotFound>}</>;
}

export default EmployeeCard;
