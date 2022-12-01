import React from 'react'
import {Box, Divider, Typography} from '@mui/material';

import Footer from './components/Footer.js';
import Header from './components/Header.js';

import './routes.css';

function About() {
	return (
		<div>
    		<header className='Header'>

			<Header></Header>



			<Box className='Body'>
				<div className='scroller'>
				<Typography sx={{fontSize:50, marginBottom: -1}} variant="h3" gutterBottom>
					<div className='oute'>
					<strong>
						sobre
					</strong>
					</div>
				</Typography>
				<Typography sx={{fontSize:40}} variant='subtitle1' gutterBottom>
					<div className='out color'>
					o projeto
					</div>
				</Typography>
				<Typography>
				<div className='out'>
				Tem hífen ou não? Apesar das regras de hifenização serem claras, 
				há muitas delas para serem memorizadas, e a pesquisa para encontrar 
				uma resposta às vezes pode ser demorada. Então, porque não 
				desenvolver um <i>software</i> capaz de auxiliar escritores, revisores, 
				copywriters e outros profissionais do texto, que assuma o papel de uma útil ferramenta de 
				consulta por palavras hifenizadas?

				</div>
				</Typography>
				<Divider sx={{ width: '70vmin', m: 2 }} orientation="horizontal" />
				<Typography>
				<div className='out'>
				Na busca por uma solução para esse problema, o <i>hifeniz<span style={{fontWeight: 'bold'}}>.ei</span></i> foi projetado 
				e desenvolvido. Ele é um programa simples de processamento natural de 
				linguagem, que identifica palavras compostas por justaposição e 
				aglutinação, processa e aplica a elas as regras de hifenização vigentes 
				no novo acordo ortográfico, e retorna uma palavra corrigida e 
				justificada pelo programa. 

				</div>
				</Typography>
				<Divider sx={{ width: '70vmin', m: 2 }} orientation="horizontal" />
				<Typography>
				<div className='out'>
				Misturando gramática e tecnologia, o projeto atua não só como uma 
				ferramenta rápida para buscar por dados, mas também uma ferramenta 
				educativa que ensina sobre a língua de maneira descomplicada.  


				</div>
				</Typography>
			</div>
			</Box>
			<Footer></Footer>

			</header>		
		</div>
	)
}

export default About;
