import React from 'react'
import {Box, Divider, Typography} from '@mui/material';

import Fixed from './components/Fixed.js';
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
				<Typography sx={{fontSize:45}} variant='subtitle1' gutterBottom>
					<div className='out color'>
					o projeto
					</div>
				</Typography>
				<Typography>
				<div className='out'>
				Tem hífen ou não? Apesar das regras de hifenização serem claras, 
				há muitas delas para serem memorizadas e a pesquisa para encontrar 
				uma resposta às vezes pode ser demorada. Por que não desenvolver 
				então um <i>software</i> capaz de processar palavras hifenizadas, auxiliando 
				escritores  e profissionais que lidam diariamente com o texto?


				</div>
				</Typography>
				<Divider sx={{ width: '70vmin', m: 2 }} orientation="horizontal" />
				<Typography>
				<div className='out'>
				Na busca por uma solução,  o <i>hifeniz<strong>.ei</strong></i> foi pensado. Um programa 
				simples de processamento natural de linguagem que identifica palavras 
				compostas por justaposição ou aglutinação, e aplica a elas as regras de 
				hifenização vigentes no novo acordo ortográfico.


				</div>
				</Typography>
				<Divider sx={{ width: '70vmin', m: 2 }} orientation="horizontal" />
				<Typography>
				<div className='out'>
				Misturando linguagem e tecnologia, o projeto atua como uma ferramenta 
				educativa que ensina sobre a língua de maneira descomplicada.  



				</div>
				</Typography>
			</div>
			</Box>
			<Fixed></Fixed>

			</header>		
		</div>
	)
}

export default About;
