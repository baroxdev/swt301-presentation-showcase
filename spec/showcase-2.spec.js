describe('Form validation', () => {
  let form;

  beforeEach(function () {
    form = document.getElementById('add-product-form');
    if (!form) throw new Error('Form is still not initialized');
  });

  describe('Test case 1: Form fields are empty', function () {
    beforeEach(function () {
      const name = form.querySelector('input#name');
      const description = form.querySelector('textarea#description');
      const category = form.querySelector('input#category');
      const price = form.querySelector('input#price');
      const photo = form.querySelector('input#photo');

      name.value = '';
      description.value = '';
      category.value = '';
      price.value = '';
      photo.value = '';
    });

    it('Should display error messages when fields are empty', function () {
      // Simulate form submission without entering a name
      form.dispatchEvent(new Event('submit'));

      // Expect an error message to be displayed for the name field
      const nameErrorMessage = form.querySelector('.name-error');
      const categoryErrorMessage = form.querySelector('.category-error');
      const priceErrorMessage = form.querySelector('.price-error');
      const photoErrorMessage = form.querySelector('.photo-error');
      expect(nameErrorMessage.innerText != '').toBe(
        nameErrorMessage.innerText != '',
        'name are empty, but not found any error message'
      );
      expect(categoryErrorMessage.innerText != '').toBeTruthy(
        'category are empty, but not found any error message'
      );
      expect(priceErrorMessage.innerText != '').toBeTruthy(
        'price are empty, but not found any error message'
      );
      expect(photoErrorMessage.innerText != '').toBeTruthy(
        'photo url are empty, but not found any error message'
      );
    });
  });

  describe('Test Case 2: Invalid category', function () {
    const categoryList = ['Food', 'Beverage', 'Fruit'];
    const name = form.querySelector('input#name');
    const description = form.querySelector('textarea#description');
    const category = form.querySelector('input#category');
    beforeEach(function () {
      name.value = 'Mango';
      description.value = 'A tropical fruit, located in Vietnam, Thailand, Philippines,...';
      category.value = 'Smartphone';
    });

    afterEach(function () {
      name.value = '';
      description.value = '';
      category.value = '';
    });

    it(
      'Should display an error message when category is not included in: ' + categoryList.join(','),
      function () {
        // Simulate form submission without entering a name
        form.dispatchEvent(new Event('submit'));
        const category = form.querySelector('input#category');
        expect(categoryList.includes(category.value)).toBe(true, 'Invalid category');
      }
    );
  });

  describe('Test Case 3: Valid Form Submission', function () {
    beforeEach(function () {
      const name = form.querySelector('input#name');
      const description = form.querySelector('textarea#description');
      const category = form.querySelector('input#category');
      const price = form.querySelector('input#price');
      const photo = form.querySelector('input#photo');
      name.value = 'Mango';
      description.value = 'A tropical fruit, located in Vietnam, Thailand, Philippines,...';
      category.value = 'Fruit';
      price.value = 50000;
      photo.value = 'https://source.unsplash.com/random?mango';
    });

    afterEach(function () {
      const name = form.querySelector('input#name');
      const description = form.querySelector('textarea#description');
      const category = form.querySelector('input#category');
      const price = form.querySelector('input#price');
      const photo = form.querySelector('input#photo');
      name.value = '';
      description.value = '';
      category.value = '';
      price.value = '';
      photo.value = '';
    });

    it('Should not show any error message', function () {
      // Simulate form submission
      form.dispatchEvent(new Event('submit'));

      // Expect the form to submit successfully without any error messages
      const errorMessages = form.querySelectorAll('.error-message');
      console.log('🚀 ~ file: showcase-2.html:204 ~ errorMessages:', errorMessages);
      expect(Array.from(errorMessages).every((errElm) => errElm.innerText === '')).toBe(true);
    });
  });
});
