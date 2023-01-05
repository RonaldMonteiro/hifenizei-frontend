import React from 'react'
import {Box, Divider, Typography} from '@mui/material';

import Fixed from './components/Fixed.js';
import Header from './components/Header.js';

import './routes.css';

function Help() {
	return (
		<div>
    		<header className='Header'>

				<Header></Header>
				
				<Box className='Body'>
				<div className='scroller'>
				<Typography sx={{fontSize:50, marginBottom: -1}} variant="h3" gutterBottom>
					<div className='oute'>
					<strong>
						ajude
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
				O hifeniz.ei é um software gratuito, sem anúncios ou cookies e que não possui 
				investimentos. Ele foi desenvolvido e é atualizado por uma única pessoa, que 
				cobre todos os custos para mantê-lo no ar.


				</div>
				</Typography>
				<Divider sx={{ width: '70vmin', m: 2 }} orientation="horizontal" />
				<Typography>
				<div className='out'>
				Caso queira contribuir ajudando nos gastos do site, ou me pagando um sorvete, 
				você pode enviar um <i>pix</i> de qualquer valor para <strong>hifenizei@gmail.com</strong>.  E se você é programador 
				ou letrólogo e quer colaborar de alguma forma, entre em contato por e-mail. 


				</div>
				</Typography>

			</div>
			</Box>

				<Fixed></Fixed>
		
			</header>		
		</div>
	)
}

export default Help;

