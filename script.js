document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;

    // Tạo vCard
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${fullName}
TEL:${phoneNumber}
ADR:${address}
END:VCARD`;

    // Hiển thị thông tin đã đăng ký và liên kết tải vCard
    document.getElementById('infoFullName').textContent = fullName;
    document.getElementById('infoPhoneNumber').textContent = phoneNumber;
    document.getElementById('infoAddress').textContent = address;

    const downloadLink = document.getElementById('downloadLink');
    const vCardBlob = new Blob([vCardData], { type: 'text/vcard' });
    downloadLink.href = URL.createObjectURL(vCardBlob);

    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('registrationInfo').style.display = 'block';
});
