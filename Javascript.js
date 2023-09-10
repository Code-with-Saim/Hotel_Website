  // JavaScript code to handle the dropdown functionality
  // document.addEventListener('DOMContentLoaded', function() {
  //   var customSelects = document.querySelectorAll('.custom-select');
  //   customSelects.forEach(function(select) {
  //     var optionsContainer = select.querySelector('.select-options');
  //     var options = select.querySelectorAll('.select-options option');
  //     options.forEach(function(option) {
  //       option.addEventListener('click', function() {
  //         if (!this.classList.contains('selected')) {
  //           this.parentNode.querySelector('.select-options option.selected').classList.remove('selected');
  //           this.classList.add('selected');
  //           this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
  //         }
  //       });
  //     });
  //     document.addEventListener('click', function(e) {
  //       if (!select.contains(e.target)) {
  //         optionsContainer.classList.remove('open');
  //       }
  //     });
  //   });
  // });