function check(age,weight)
{
    let message = "Enter valid age to check (5-20 yrs)";
    const ageGroups = [
        { age_range:[5,7], weightRange: [15, 20] },
        { age_range:[8,10], weightRange: [21, 25] },
        { age_range:[11,15], weightRange: [26, 30] },
        { age_range:[16,20], weightRange: [31, 40] },
      ];
        for (let i = 0; i < ageGroups.length; i++) {
            if (age >= ageGroups[i].age_range[0] && age <= ageGroups[i].age_range[1]) {
              if (weight >= ageGroups[i].weightRange[0] && weight <= ageGroups[i].weightRange[1]) {
                message = "You're fit";
              } else if (weight < ageGroups[i].weightRange[0]) {
                message = "You are underweight";
              } else {
                message = "You are overweight";
              }
              break;
            }
          }
          document.getElementById("p").innerHTML = message;   
}
function checkWeight()
{
    let age = document.getElementById("age").value; 
    let weight = document.getElementById("weight").value; 
    if (age <= 0 || weight <= 0 || weight > 150) {
        document.getElementById("p").innerHTML = "Please enter valid age and/or weight";
    }
    else
    {
        check(age,weight);
    }
   
}