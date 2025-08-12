document.addEventListener("DOMContentLoaded", () => {
    const oThang = document.getElementById("thang");
    const oKetQua = document.getElementById("ket-qua");
    const oNut = document.getElementById("nut-kiem-tra");

    function tinhSoNgay() {
        const thang = Number(oThang.value);

        let msg;
        switch (thang) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                msg = `Tháng ${thang} có 31 ngày.`; break;
            case 4: case 6: case 9: case 11:
                msg = `Tháng ${thang} có 30 ngày.`; break;
            case 2:
                msg = "Tháng 2 có 28 hoặc 29 ngày."; break;
            default:
                msg = "Vui lòng nhập tháng từ 1 đến 12.";
        }
        oKetQua.textContent = msg;
    }

    oNut.addEventListener("click", tinhSoNgay);
    oThang.addEventListener("keydown", (e) => { if (e.key === "Enter") tinhSoNgay(); });
});
