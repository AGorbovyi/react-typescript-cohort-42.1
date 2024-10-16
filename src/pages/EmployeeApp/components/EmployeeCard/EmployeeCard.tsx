import { EmployeeCardContainer, Print, Label, EmployeeData } from "./styles";

function EmployeeCard() {
  return (
    <EmployeeCardContainer>
      <Print>
        <Label>Name</Label>
        <EmployeeData>John</EmployeeData>
      </Print>
      <Print>
        <Label>Surname</Label>
        <EmployeeData>Johnson</EmployeeData>
      </Print>
      <Print>
        <Label>Age</Label>
        <EmployeeData>25</EmployeeData>
      </Print>
      <Print>
        <Label>Job Position</Label>
        <EmployeeData>QA</EmployeeData>
      </Print>
    </EmployeeCardContainer>
  );
}

export default EmployeeCard;
