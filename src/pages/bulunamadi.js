
import Header from "../component/header";
const Bulunamadi = () => {

    return (
        <div
            style={{
                alignItems: "center",
                flexDirection:"column",
                display: "flex",
                gap: 10,
            }}
        >
            {Header()}
            <h2 style={{display: "flex" }}>
                Sayfa Yok Yada Sayfayı Görme Yetkiniz Yok. Yallah
            </h2>
            <h2>
                {" "}
                <a href="/">Anasayfaya git</a>
            </h2>




        </div>
    );
};

export default Bulunamadi;