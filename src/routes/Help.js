import React from 'react'
import {Box, Divider, Typography} from '@mui/material';

import Footer from './components/Footer.js';
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
				<Typography sx={{fontSize:40}} variant='subtitle1' gutterBottom>
					<div className='out color'>
					o projeto
					</div>
				</Typography>
				<Typography>
				<div className='out'>
				O hifeniz.ei é um software gratuito, mantido no ar sem anúncios ou cookies e que não possui investimentos. Ele foi desenvolvido e é atualizado por uma única pessoa, que cobre custos de hospedagem, domínio e tempo.


				</div>
				</Typography>
				<Divider sx={{ width: '70vmin', m: 2 }} orientation="horizontal" />
				<Typography>
				<div className='out'>
				Caso se sinta à vontade e queira contribuir ajudando nos gastos do site ou me compensar pagando um sorvete, você pode enviar um pix de qualquer valor para XXXXXXXXXXXXX.  E se você é programador ou letrólogo e quer colaborar de alguma forma, entre em contato pelo e-mail XXXXXXXXXXXXX. 


				</div>
				</Typography>

			</div>
			</Box>

				<Footer></Footer>
		
			</header>		
		</div>
	)
}

export default Help;

