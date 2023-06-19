function GetComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  const ComputerSelection = GetComputerChoice();
  console.log(ComputerSelection);