//your JS code here. If required.

document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    input.addEventListener('input', function() {
      if (input.value.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace') {
        if (input.value.length === 0 && index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });
});

