function calculateBMI() {
            const height = parseFloat(document.querySelector('#height').value);
            const weight = parseFloat(document.querySelector('#weight').value);
            const error = document.querySelector('#error');
            const resultBox = document.querySelector('#resultBox');
            const bmiValue = document.querySelector('#bmiValue');
            const bmiCat = document.querySelector('#bmiCategory');
 // Reset
            error.classList.remove('show');
            resultBox.classList.remove('show');

            // Validate
            if (!height || !weight || height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
                error.classList.add('show');
                return;
            }

            // Calculate
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            bmiValue.textContent = bmi;
            // Category
            bmiCat.className = 'bmi-category';
            if (bmi < 18.5) {
                bmiCat.textContent = 'Underweight';
                bmiCat.classList.add('category-underweight');
            } else if (bmi < 25) {
                bmiCat.textContent = 'Normal Weight';
                bmiCat.classList.add('category-normal');
            } else if (bmi < 30) {
                bmiCat.textContent = 'Overweight';
                bmiCat.classList.add('category-overweight');
            } else {
                bmiCat.textContent = 'Obese';
                bmiCat.classList.add('category-obese');
            }

            resultBox.classList.add('show');
                
        }