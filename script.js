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

    // Hiển thị thông tin đã đăng k
