import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

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

    const photos = [
        {
            id: 1,
            alt: 'img1',
            title: 'Start with create new personal board...or...',
            link: 'https://lh3.googleusercontent.com/GII6JT88FbIrFydaf7lsYfNCCtun1i6n7MoPsdsYEAVG6f34PIQCOEaKAB_FMwTbpTfIgovVLfbjs8xBuBI0juyicUA_iaMxrX6BDu9K_tZz5PDrjYh-63YMDD2WGNML1kNRXm_XfxfJf6VoFwr-Aa-3jLWPSNDXbdGEyfyTdoxFb230fSjWaIEHwYCaG6_nBwRCzg9-WSr3PTYalmTnH0G31A0kY9LMi81uvsooIN3NThtCA0Y-Lkj1irbHc_KG9LjsO-vQXzgqz-J2awL2Q7_AkUrxvWQVVwK3C4HB_NfWSdZIYCCakpad9KK0_aTYlbzagrCyfWAfVM-MUGetBDCJ3kDGzVE16yIRtKzstasvgXaGCPrxL_D09POK28iqdN384NXnLCDi9YC7y6CB2ED5L8YF_qaCuVRdv8GpVUwrAdoTfbMxWHiyYm46HLRiKUnxMDcVj5ZrnErl6901CcquK61DG7QUUZrhuebgKFLeS_biOyTs0b2ePsqWM-SdiyWUb_1iLcvJfIdHU7eI6kFTB0RcNHfEd8J5XtZ6sjc9jThGoqg_MZ4RbhtL2zQovPPRMukh5jMkweM_CTDzNqsXsK9dkC4qGrX-ZmFB4o5iLHabAbxNAaSbBy1iVK8WPIRc6iYrJzTk4_6aDuxsDiY-oBMIE5fcVsFSgPNyrGmkDq0P8h2e3g=w1721-h929-no'
        },
        {
            id: 6,
            alt: 'img2',
            title: 'create whole team. :)',
            link: 'https://lh3.googleusercontent.com/YnSmqP3guMDWlcK4W4pvb5YoE5a6NdorS76gSM1hwRW1XJKWCAovuHZT7UvWMnBDhHH0qKsMzRikCTtnn01F-nnG2s3yqLAxGUU27axFRKOQgx0bg4081PWFWH0mRiVse734dLyEGb6QLpyPwzEVyjpbnueBK0ak1LIZquT8GvT9LDSQzHGxvzTyD2YLS5x5VB6fIvUB_im5cGJrX8qaoOiuGlRQj4cVGqTiv1Li9ysXov84bioZRfPJ86UbPxa2ILNJKvJChxUa_nxdPJmHY7pgzkWsKRl1gk3e9t0rs7TQ-yjev2dnczGnZucHbaYnSom2V9BrPlNKkOX25f1evoxSF3d5ac4kjIvb0Ln9vMK_TkZWW8zUJVZRgLMSY6YGbtod7UxBjs_69fqizsdAjWtravsMfhUlDZDjgm1gukEHraC1E5qLBxwiugt-4mMZoF-h0C3xYqvO6O5HW6v67g6DdeBNzjUe6O_lYtv9d4KexXcgmk1y2ayaQUW-N0vjhn1_QGn_-k8P5h5dn-EzGdgVmrKi5AD9AHXW9JLHLXsmIdUGtLNO7oaE4QseBSr4ejGfBcPz2Y2WHIYXzmG99J_434tejM-nnpZ-LadxBl55rfny3s3rFczE7SeTPiW0A9jntv0Qb1h6I8D8x_ej6rxhuS8est2z3X8dwCiMtoeubbqwoEYZaA=w1721-h929-no'

        },
        {
            id: 4,
            alt: 'img3',
            title: 'add new board to team...',
            link: 'https://lh3.googleusercontent.com/71D5RrJ4v8G9uHwKsVb69IakAICTSCaMtzyqGed0f6oVPAVzHLYI3sqJ9CzgAmWk7WCEThrfOngcGUbqhJP3q6K1YfgpeiLNGuziYqhy1V6POxnt36vPsO8WbqfzzbWF0xmrdngGRAPVWHm-6nVIOcadp4ljfT3eFIsQM1DkZsZFOPpaSbgxl2vgx0hZ4TcjZCn6Z3JeqXfKez6-cg-ouBcPSHYx4TUpKS0iWrCygrhisr7f11HfVezMTXUZvG6KgQ1e25dA4LdZpJvoR2QJsVEzDSTOG5lisbAKRyhvZjP7mBu6KCLEGQH1ZW8UlVtamXHKa2VwgKrs213fGhXlkml-FE-NVRvUzb96_P9qmYNKpIKArHlLhU1gPi078y6xrpaqeTj4ZgfgFJVhQa7zmapt-1SqBezDfj8AbkM9s94FtIy_HTcUeg78y-VTjfW0ONIk4xM8xURt_DE007LPIv-XLMikzeqld1KxXEwYeIpVXFSysjrgNcxUSzLxogj6EibMCfvyNkyZME9YTR2QasH-Nms4RILSGXR2ys3dwxQjC0aO8Vvm9GsgbWp_N43qVSLvDxNbh0o5-gsS7VitligEkuIl2Y_ZAyvrLA5yguw4EuRXTQ_LPTs5OlsGwRWuX8SEB017la0oCQ1QlnAYQWHpV4xGPy2cOV7J-LE8zeLCZGVAja18ew=w1721-h929-no',
        },
        {
            id: 5,
            alt: 'img3',
            title: 'edit team settings or invite more members...',
            link: 'https://lh3.googleusercontent.com/_F_942OX2m7Au5QF9r74BJUi7r9F5ti3v6K6At3SF3V4lwMYANA1hXL4JRuosN-__W3X2g8wH0gQtC475TJfBdPSvlP0HL3vYf-_YiiI0y3yIfFnNUIdzDsOVF1IYvnGHtDFK1xovZe_AxyStuK98K5p_CLjyQGcmeM0LMkCIIDzgH5Dx08zUGVVqD901D04_ip0D_KLzTRlt532clRcbbOn0U1qusV2GpC0lL1ejLJahyXol1b3XbU7smPBTo9oOzrdX6c_EOLXhXgtt0GDfcIHcvqH53Ws3C20pSlMWGg72-Jz2jtc9U3JP7RylD5sL4_0_V0HqYmoHohs99f7NTZWF1aDjOZi1D7DFUhKI43dyikJ57VMP0EhI8EnsQkCDEv9byj1bOFQJ4sJNToTPrJ-3qJFf8iX7TYHE3i4JI7NGfz1FCYU5kNi_lKQLs-iz40Xoum8QXmsaMS0BiraoGhizb9MPYMGZGQB7xDKG6l-tqYGmjZECAMJL7SzAvubn78rRuV8jKe5SiJYO9Scz-DzvW4ZAsu0jGUOX2_Qou552iDL-CUbEV19EdCC9WNUPNwneBvbotLrm0ppLw_rdw9QSv0Nv93nEaX4Xi9F43uGxasUAHD6zrbgxqos99RqUTO2iR_mXmH3s0f0qGUJDsHzd8ixAzHLO0lhhMZTYEhxEV8F5snX0w=w1721-h929-no',
        },
        {
            id: 3,
            alt: 'img4',
            title: 'create lists...and add some cards...',
            link: 'https://lh3.googleusercontent.com/8ufvc39vBhM16IUhamWffiMqx1ag5Zd43fSRcEiEcnBTKrHLluiXSeww4JQwpIDhlN-pjdfY2hvSgz5OPe3HdBnAHZZhYvv_A5EmEvTVXmgFRhwki-nKq4Wa8maehHLW5QXkkDnF8XS9tWqehnxO7zEPD5aX_baYRY184BSrg_GAAH4KD8-2xjWdzpMhm110jGghEPiZMdZx8t-x35AeiQ9AJvmmpfpFMvWN_9L7mv4opJAWv-NsMCv9DEfXWAVUxJjlRlG2idJTPC4aHNIQQRhv1dG-3URN2C1ozN66uV7llhSa5pGnqdB8S3Z_QKuS3AzKTdffGuN1dvXUKjW3_8iERckDII-yPCtmHTTOlk6sEydFmcIDSvABCosWlkqlRSQUsJ43eeqQpJVDWwp6MVEhGl76DuKCk25FsaoDyOtDjWtQ5wJ-g335bVyUyDudhrTXyHhwTsGRzzMnHvTFwvKUIPsbKnmZdL7bkcrZIRc-Nn6m8K5OP0WaYfTkX7zmSUsT7B7eYXrMQ81U0Q-yDQV73guAUqjIkIafR9flSmYWMrr3yt3e92mlHNo09kOdYdGzAxBzXpjYVQbl6ADbg-zfb2Ifg6ovyAUkf17HRVs8MY9SnCHSykvFeE6yhk5EF0NuENz5I2nDdDHgq3mO5Xd5tn64w2Omop6hh24I8sLuDi4PWSv5rg=w1721-h929-no',
        },
        {
            id: 2,
            alt: 'img5',
            title: 'add more details to your card and enjoy. :)',
            link: 'https://lh3.googleusercontent.com/FGqv305e1yFSLgPSkQM5q80pKz5GOyrwZvjZcByjxQVMNYvsKrpVWA0oX7wAdC2lvFxxLvd97THweTOsClqpiU8YzSTIoWMqCMbIBjUYR9dvRtBC5Ytixgn-IB4MdAw-VJSMmekrSIN2GeoTm9N7m_z59lgiB2HATcj2pBcVEoPF-LHONqQbVLhXi_VYDmPhJ2pHD86xU22V_yMPBfIK1A_kkTHeji1KS1yU52erdWkIil5dyXacoERbqgjCQCkN6XuLg2F-2VYFzu3TvpbyDH2-1lD7RJugrDiBcxN0_fn5s68P5s3kzop3KTS4aAJmo2hsr_a2ZbO89jaVf7W_zS4Nqgza15QjfzT7FwTVPNFcgFptxqyuubMD18w_dTgCrCtMDnXkpKsHMIaIIgIUv8bhYkeSYYo-EnSAnySBCs0os1Khh4zx1TwTiJoWZNOlCmfjIlFrn58KCHInP6YwVj_x3Tlpb9QcQ2ODU7XB95LRFkBH_9YAeUb4TxoZvqY9QgcNmEJuDrikk0GdaVXLmqGyW7OxGzAPovWl9E2Kf_q9fthrxtgiD6-cJptG942U6h7diuU9xOdrLTO54jK9BLXfl4uivXIOCbMBU1ybkL-k0iUTVb_-QMvOucl56o6dzzqMp0CwtrLtHhXis9hcxquitZO4PHMOqpO6EF3flK4Z-vB2Tm8TsQ=w1721-h929-no',
        },




    ];

    return (
        <div className={classes.root}>
            <div>
                <Carousel>
                    {photos.map(photo => (
                        <div>
                            <img alt={photo.alt} src={photo.link}/>
                            <p className="legend">{photo.title}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default SiteScreenShoots;
