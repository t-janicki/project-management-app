import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import img1 from  './../../../../p'
// import img2 from './board/img2.png';
// import img3 from './board/img3.png';
// import img4 from './images/board/img4.png';
// import img5 from './images/board/img5.png';
// import img6 from './images/board/img6.png';
// import img7 from './images/board/img7.png';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

function SiteScreenShoots() {
    const classes = useStyles();

    const tileData = [
        {
            img: 'https://lh3.googleusercontent.com/-zjJTuR5v8BOAGYfNIEFr7HkjqhAE6WKP2OyOWXIuJdeMg5G8uQoSz4lZp2efkxYXVFR3cdldtsiIzfYwZ8nRxZVvwor3_Y1K_loHygOvDPdGgbh_J4J7cYdaxmTSVxGXmW15P4C1wNDVL0odlPuEc6HVgoh_W2Mfq19r3Pd6geQ5VziaXbbKVTLezhDOJ7JHixPGhBvyYhGgK8-9MKYy7Z2mGk-PsXTNn-roLgZFhUDFOjcosj9Oqh_BlYp93SZ8KqQ7cqH7eby7dsis4wIFEBX0z6hWbMl60Ws0C-8gaLi77de787Dr6kLdoxY6MnZEMjkc_BUJwf97D3X5h7V1h29m7gqUbJ45uvQ6E-b9r2NkS2I38jpAHloMNjqePqLx8GbQajdFLYGDg_8SN1xk-7HBzAPPYjq_pSFjg4lnie7OA80Xy_xkNx1Ba_BLq79AtxHzUpaVzD7jA9E-eKd7zMg48PQjjUUZ4gZg9mepVA-vjx3z-3GRwXH6-spasfkpupZuZ0A9sJfSLQbWDPDPBnGiJ3Xss71HHfcf9idb9ykqPTkpWwtNqkY9nWTSy1brLGrL1QJP8zToXVnf4ahbniKd1quEZhsMsF9M8eL38BpbvZjYKXuAWcyPIpenvHtgGvbAd1k59DdPQbcskV1sAz_Y_LhUz4RbFaObasDFqEkaDUFyf8BuA=w323-h944-no',
            title: 'Image1',
            author: 'author',
            cols: 2,
        },
        {
            img: 'https://lh3.googleusercontent.com/J72UHA0HyTV6fLEecWNO_npBQn1-wJToG6JYZQy9m-6rrpwlMabK4H4hwzwtKAh5kPGqAx6FvVZBgj0Tld_Toi4NI1YtFcDR78J5aIyD0VVE6dv8p8Ui7qyPAvmBfb3bfEORAxRqs9UojVZDH0NMJLBb-YFHKVrVxhTQmthgbr3g0aE0--ENmEvgft8uI_EEWUBcim3_IAmWr2yC4CYOIU71HDfyIlB6ptkmwOBMPNlLNSMGfcf-vlYZmNMg6Xh7o5i_tOKA6aTqdY4j6b3cGrDccMxuDw6418RJPRgsrPxHJcaT_0MqAa2C6EjBE2Q2PrGygeq9-nOaEE7QpSAD4kFL3h4LDDemGPA4QFcdAgs6Y6M7P5eRYNoejjPxvFFIPUK_7ZKGzbueKm8kB3hFWuNpBXMpIFL0eVtNcwV4MMADt4HFW_F3gIN3Ai1k2fZJ8UKcT2xd0eu_hV7I2qtqwPpxOHUvVyGjn9ADYx-C_1FwvRZeJPYRv78tJ6lkUWcgoXqjpufWXPiNuT5nlCKkVoy_DzQaaRFUu_dHMEj9TcWplZbU7N-46rEvDwB8xtXiTuBK9V-pfjQEWon1fSIHBbxSTQPgAxjk1Mek3VfoBlXXYtYoyZRwFBIMfY0DJEyQ4c-yJiopis17V8ddSMXql561bnm_wBvEIwum709zsAzeA65iEdfItw=w595-h873-no',
            title: 'Image1',
            author: 'author',
            cols: 2,
        },
        {
            img: 'https://lh3.googleusercontent.com/dH4sUBY3R1vjGsl6yBmL2UQBRjpIQILx_gMHG4gHq8WYVDWn_WQcQ6y1JOM3FDHr7NvRLittKs8IZsL9bXgaSo0pAsmqDUTmCkV06RqacfYAxurXckv0RO5LKDo1VoyLlbhiRIZUaem__3blDgqfzZ_5hJRf27I_wlUwAj1hRE-l8HB_OqBGTlGQWF3619VbLP4NnupNdoJkiZPCMGNNHtDmHdQH8RGLKWWwrhizEbHp-_n52iN9bJ4gqNhb7pSJImsAwsn9ubLmhVx7Pp3npB47n5DUeZvDkyeLy42lMcaRKTcWkgzktBszSppHFP4iErqo8S0DW3yEGUgYECfhhfZXjBDJFnJnfnzCsrEovYsHtUrypcmBuVmqPhlGAFGA-33sC_bSbhjKosiwOqTiPinh39XEphFY2Va2xE37ciRM0c2hM8wW7YcnDqaNocXdOKx4-EBBkP9g0M_TPba1IGo1DrYO3r0wJpVpaq9fJlIKi8gMGDFF0M6I3sIm8EfXWsNSyeOQQSEku7L6GVWtjj8vrmgLHM6twaMgMPik0bP3K8SHIz1mO7QaFgDXovV1U_TwhEzS708NbFZHNgjnybEQEfR2EvhcXrCg2w29HYwrE-2czUp8-FKoudDPasP6ZPSAxYflF_HBNM4uqzr9MqT2vke9uubgh8Yv7NsPui2NiN_J1tE9Bw=w658-h470-no',
            title: 'Image1',
            author: 'author',
            cols: 2,
        },
        {
            img: 'https://lh3.googleusercontent.com/gIpKahz2hBRxySpS8X0xsdkAidZxrW7b6eK7lQkZe3HK8R_X6LmKYFHeX0PrPcBFllyxDtQ-jDHvMTnrEapTCbZTqLdQ5FeJLAMdBtjQ9rTCfnBJtxDwGn3ksgSb1ata7sOgPvFkieDrhvLgeE3DV6YDYMFdfI7hpEvjiRpr_WWz75rrVRB_f3o9b43Sf-yhFxd8ghuw6qW3v6sXa6G7p_DCg_cXsK7JeZ0-ayjvOgKCT8myjWEhUX0BJ-IaU_k8_sEGpfmj05T5H72DxMetTCeIHKO6047DM1t5LfgwMnsRI0ykkATEazS9xMJE7HYrAB_G53chmBAx978ZF3geVkVMY9-fHUCW_b3o3ByWcq66R17qEkyTyCLZI61eXVGUkN-Hwd4khvdtMaDvp3UUhHFxxtXJEohehcITcXFdPGBlki0-8L45fSIEuzfWryxQEhRLSjPTqXwfmh24Nv03oIn3Qks8q2GnOoBaQo2-_KcLiUZfUwdJudYD-Gw79MoakJaFnB1OBQsCXSa2RFsiCH8HolRoxCUCouZWgCTtQMkY317pXibuIqxUTuYhO4U-c_pSWxSdoXoBNqYZjZwIQs_G86AcD7lAi5F16EgJUghDoofCg79j_Lzk7Cp1yKKwmuucXpwq8-l9w0i3mkXI7ncJ7tEgXhuuFtM0DN-PeTv9L6427zy-cA=w766-h940-no',
            title: 'Image1',
            author: 'author',
            cols: 2,
        },
        {
            img: 'https://lh3.googleusercontent.com/X9ptim8qz1Nmvpr9A-wRRFQipAJa8tPJfPZJDSXYj7drtm1v3nSPastxXvX-p--RGrwsui_cqtte69gIbYw78fYzL0nQowJInc1Nt0x-RKG-8_9bemuIBnGbA6244Dro93JJSvREv2gHcwkbQXKkYu0LgOiKr5MiWZU9Ew8sVAL9r1FmCidcE4Ic5IyCQV8dvd3JwEt86pOYF9D4dqbv-BYlCyus4hJQ3nZQLAR9eIjulxZ4QuTVstYu0EJHscvzafjOlyTD41tvfkYA_QBrnRb5U9S3lKvIrY_bw0SBLoL2OKjGOZ-FuqjaGvk3vLf13CRc2iXUpB__YfoRLGkUcekMwPXS6NuMi9Rk4rm73OHhS0YL4N9rwRGG3LlJP7MHUuxLO4TyICWA80oYtYhsLzUvZD0FJsByis6xRBswW-t_3CmyK_Fa1PPExn92UC8yeYREcp25tBWQCpugWojZpZ1jN7d0uwwl0KCVIFVK19glcZf9rfZ4eNLpqxyJkWlvcqRnEj676tIZSjWT3W2cWGCGtHy4FJqs2domkaL4JqdOEw7ficjpYMQjnify7Hb2VdK4TjaagW7KHiDCLdI1kPuX28OnQw5HBqfAuj6qG65jLwff25U713WEfxy7up7TP8T_0jzL0ubeJksuQ2GGUVuIDLDYARYxxE4kryrTuKsATOGXBCrFZA=w1377-h477-no',
            title: 'Image1',
            author: 'author',
            cols: 2,
        },
        {
            img: 'https://lh3.googleusercontent.com/59lQVyM7G_zpp02cL1duX29Vpe4HMWfN-ogFTgUV7B7CBwb7jaYXNIO5THt15VXq2dKpKdZngDhd4NDh864H7XgpYaAKXGNyZC4R9Atc485pnmXnkWltwphhP_w9OZS00YHLAiOtuvkbZ2HEDzDQ1LfJfY2H-gpZl0qK1idso6FO0m_TDox8XjRWCbpfcGjYWGAXXECjL52AS3a0_fkHA-vU9GPHVsea5bnxCxYE2d5YaNuvTYiuD2QCeLGAtF1wwI5I446boJDFHIqxys5pzv_FEY0lPGbV3xKWe3ZI0m_bdpm3ks5XK2jlpUeX5vgRwp9-zR1m3br0BGN1tvzFxJQflncP6kRfFdloJQEnCaaIXrbigetKkLa4ygnrxJ0y0sxRRIy2iL6xREa97_3RtQn5AWqw3m0mWNXJBTEOaXxlwaQuSrjkIJflP8f_oeLrrcXqjbFyICJExXgkKnEykZ-crWXWvVZob98KBkMoGkLHTO3-7_axMJtuh91Ba7mx-NTlmPdoDxyjpGDHTIvXJhwd6b5krvTV1xIWgZgWiy7GH_UYiOWSk9B2q3psB4LrX9BldH-kOSLT25Hg-ysW164ZkzIE0elwWDlzKN1y745A0dNybvDGGewWCu1GNVAEKbQ13XZa_H9mEkU5o6SEHgEy931lIHv0FHbUKv4H6q7pQuUeylAtSg=w640-h477-no',
            title: 'Image1',
            author: 'author',
            cols: 2,
        },
        {
            img: 'https://lh3.googleusercontent.com/E8TsjlwWP6AfZCUvie3a25d_M9Ed9lACrm7hJijR5tYxxFntiRfhykj3m-IZdGTvbq0d0PqhY2PLgIyqK1TdrtRHnH-JBB-uJtfFPhb8Hh1AgSiDa8pmkT4C02hooJi5Iaqx9vUdnQRkIGnrEMZcACIU2LssqVj6PlKxcHL7ivqlJKb3I3X3USkDaHmVS5I9MOjAE1VBVfVsgFfEW5Ox0bax_jm7h706CdlWfheFPMP8pS1tU9_weMCLLgC-ISCWirtdlleZqlqQc7bDoQjXfIsnV-W42qtHuApFQbeiB9_zKFVdzQ6Ka72YsDxf209fOPmSgcqtpng-7Q70m5pl_djSAX4S4Gjt8TrSAsLQvGKY6ESXQxqJzAw4yjF0hBughrNFzrdsBG_FjtYhJx-qE8Qs2LkK-oJ2WYPmnb_TNx__5B-WNVW7b8T-XJrNnE7-3Hgb2drbx9n68kC7zrkOlvEDuv5Zr8dsP_98sdyAjAZPHHAlNEEGECEcRGBs2fl-EiZg2R0qkGLKUtPpq5J7QMKtUJMfkMEtKb2Whn4RgPvRP_88WbK2ze5lkI05s1xBmBjuHrGWZu6cpZ3mSSclot6k5ymMl53Z4HDA84TMlE9BCtPPCrG7fkL-8YVHlhHzdOH1eegHPlDcQA0FftiA0l8q4QrHE8Rvn8q1IzQ7irjxKieXICLNyg=w810-h486-no',
            title: 'Image1',
            author: 'author',
            cols: 2,
        },
    ];


    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default SiteScreenShoots;
