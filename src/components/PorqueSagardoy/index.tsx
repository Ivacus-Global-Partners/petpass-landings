import { Box, Card, CardContent, CardMedia, Theme, useMediaQuery, useTheme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        marginBottom: '20px',
    },
    content: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    },
    textContainer: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '15px',
        },
    },
    icon: {
        color: '#ffffff',
        fontSize: '22px',
        marginRight: '5px',
        marginBottom: '1px',
    },
    title: {
        fontFamily: 'Nunito',
        fontSize: '24px',
        // fontStyle: 'italic',
        color: '#ffffff',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '40px',
        },
    },
    subtitle: {
        fontFamily: 'Nunito',
        fontSize: '16px',
        color: '#ffffff',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '40px',
        },
    },
    body: {
        fontFamily: 'Nunito',
        color: '#ffffff',
        fontSize: '14px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
        },
    },
    imageTextContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const PorqueSagardoy = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return (

        <div className={classes.container}>
            <div className={classes.content}>
                <div style={{ flex: '100%' }} className={classes.cardContainer}>
                    <Card style={{ backgroundColor: '#980628' }} >
                        <Grid container>
                            <Grid item xs={12} sm={4} md={8}>
                                <CardContent>
                                    <h1 className={classes.title}>
                                        ¿Por qué elegir Sagardoy School?
                                    </h1>
                                    <h2 className={classes.subtitle}>* Especialización & Experiencia</h2>
                                    <p className={classes.body}>
                                        Equipo docente con amplia trayectoria en materia de derecho laboral y empresarial.
                                    </p>
                                    <h2 className={classes.subtitle}>* Enfoque práctico</h2>
                                    <p className={classes.body}>
                                        Metodología que una la base teórica con la aplicación práctica, gracias al análisis de <br />
                                        casos reales.
                                    </p>
                                    <h2 className={classes.subtitle}>* Formato flexible</h2>
                                    <p className={classes.body}>
                                        Sesiones presenciales y virtuales.
                                    </p>
                                    <h2 className={classes.subtitle}>* Networking de alto valor</h2>
                                    <p className={classes.body}>
                                        Networking con profesionales de destacadas organizaciones, quienes aportarán sus <br />
                                        puntos de vista desde distintas perspectivas.
                                    </p>
                                </CardContent>

                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <CardMedia
                                    style={{ width: '100%', maxWidth: '100%', height: '100%' }}
                                    component="img"
                                    image="https://i.ibb.co/qRRZZ4w/Porque-Sagardoy.png"
                                    alt="Live from space album cover"
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PorqueSagardoy;