import { Button, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderDetails from "./headerDetails.js";
import Header from "../../component/header";

import React from "react";
const AdvertPage = () => {
    const { state } = useLocation();
    const { url, title } = state;
    const [detail, setDetail] = useState({
        subDetails: [
            { title: "İlan No", value: "1568495" },
            { title: "İlan Tarihi", value: "15 03 2024" },
            { title: "Araç tipi", value: "Tren" },
            { title: "Kimden", value: "Doktordan Temiz" },
        ],
        description:
            "Tertemiz içinde sadece birkaç kere sigara içildi gizlice onun dışında bir şeiy yok. Metro alacağım için satıyorum",
    });
    const [clickedButton, setClickedButton] = useState(0);

    return (


          

        <Grid container style={{    backgroundColor:"white" }}>
            {Header()}
            
            <HeaderDetails url={url} title={title} detail={detail} />
            <Grid xs={12} sx={{ marginTop: "2%" }}>
                <Button
                    variant="contained"
                    onClick={() => setClickedButton(0)}
                    sx={{
                        marginLeft: "5px",
                        textTransform: "none",
                        fontWeight: "700",
                        boxShadow: 0,
                        border: "2px solid gray",
                        borderBottomWidth: "0px",
                        backgroundColor:
                            clickedButton === 0 ? "#FFC400" : "whitesmoke",
                        ":hover": {
                            backgroundColor:
                                clickedButton === 0 ? "#FFC400" : "white",
                            color: "black",
                            boxShadow: 0,
                        },
                        color: clickedButton === 0 ? "black" : "blue",
                    }}
                >
                    {" "}
                    İlan Detayları
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        fontWeight: "700",
                        marginLeft:"7px",
                        boxShadow: 0,
                        border: "2px solid gray",
                        borderBottomWidth: "0px",
                        backgroundColor:
                            clickedButton === 1 ? "#FFC400" : "whitesmoke",
                        ":hover": {
                            backgroundColor:
                                clickedButton === 1 ? "#FFC400" : "white",
                            color: "black",
                        },
                        color: clickedButton === 1 ? "black" : "blue",
                    }}
                    onClick={() => setClickedButton(1)}
                >
                    {" "}
                    Teknik Özellikler
                </Button>
                <Divider
                    sx={{ backgroundColor: "#FFC000", borderBottomWidth: 2 }}
                />
                <Grid
                    sx={{
                        border: "1px solid gray",
                        display: clickedButton === 0 ? "block" : "none",
                    }}
                >
                    <Typography
                        style={{
                            backgroundColor: "whitesmoke",
                            padding: "5px",
                        }}
                    >
                        Açıklama
                    </Typography>
                    <Typography style={{ padding: "1%" }}>
                        {detail.description}
                    </Typography>
                </Grid>
                <Grid
                    xs={12}
                    sx={{
                        padding: "3%",
                        paddingTop: "2%",
                        display: clickedButton === 1 ? "block" : "none",
                    }}
                >
                    <Typography
                        style={{
                            textTransform: "uppercase",
                            fontWeight: "bolder",
                        }}
                    >
                        {title}{" "}
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{
                            color: "blue",
                        }}
                    >
                        Genel Özellikler
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdvertPage;