document.addEventListener('DOMContentLoaded', function() {
    const inputs = [
        document.getElementById('input1'),
        document.getElementById('input2'),
        document.getElementById('input3'),
        document.getElementById('input4'),
        document.getElementById('input5'),
        document.getElementById('input6')
    ];

    const saveBtn = document.getElementById('saveBtn');

    saveBtn.addEventListener('click', function() {
        const formData = {
            input1: inputs[0].value,
            input2: inputs[1].value,
            input3: inputs[2].value,
            input4: inputs[3].value,
            input5: inputs[4].value,
            input6: inputs[5].value
        };

        const urlParams = new URLSearchParams(formData);
        window.open('output.html?' + urlParams.toString(), '_blank');
    });
});
