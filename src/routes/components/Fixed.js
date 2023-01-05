import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Report, LinkedIn, GitHub} from '@mui/icons-material';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import {
	Stack, Box, 
	Typography, ButtonBase, 
	IconButton, Button, 
	Dialog, DialogTitle, DialogContent
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import {Search} from '@mui/icons-material';
import {useNavigate } from "react-router-dom";
import axios from "axios";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import './FixesStyle.css';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
const ButtonCustom = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 14,
	height: 35,
	width:75,
	padding: '6px 12px',
	borderRadius: 15,
	lineHeight: 1.5,
	backgroundColor: 'gray',
	borderColor: 'gray',
	border: '1px solid',
	color: 'white',
	marginTop: 40,


	'&:hover': {
	  backgroundColor: 'gray',
	  borderColor: 'gray',
	  color: 'white',
	  border: '0px solid',
	  boxShadow: '1px 1px 9px 1px rgb(198, 196, 196)',
	},
	'&:active': {
	  boxShadow: 'none',
	  backgroundColor: 'gray',
	  color: 'white',
	  border: '0px solid',
	  borderColor: 'gray',
	},
	'&:focus': {
		boxShadow: '1px 1px 9px 1px rgb(198, 196, 196)',
	},
});

const DialogCustom = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
	  padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
	  padding: theme.spacing(1),
	},
}));
  
function DialogTitleCustom(props) {
	const { children, onClose, ...other } = props;
  
	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
			  			position: 'absolute',
			  			right: 8,
			  			top: 8,
			  			color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
		  		</IconButton>
			) : null}
	  	</DialogTitle>
	);
}
  
DialogTitleCustom.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};


function Fixed () {
	const [open, setOpen] = useState(false);
	const [openTwo, setOpenTwo] = useState(false);


    const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

    const handleClickOpenTwo = () => {
		setOpenTwo(true);
	};

	const handleCloseTwo = () => {
		setOpenTwo(false);
	};


    return (
        <Box className='Footers'>
            <Box className='BoxFooterOnes'>

                <Box className='BoxButtons '>
                    <Link to="/sobre">
                        <ButtonBase className='ButtonTextss'>
                            sobre
                        </ButtonBase>
                    </Link>
                </Box>

                <Box className='BoxButtons Floatings'>
                    <Link to="/ajude">
                        <ButtonBase className='ButtonTextss'>
                            ajude
                        </ButtonBase>
                    </Link>
                </Box>

                {/* <Box className='BoxButton Floating'>
                    <ButtonBase className='ButtonText'>
                        manual
                    </ButtonBase>
                </Box> */}

            </Box>
            <Box className='BoxFooterTwos'>
                <Stack className="opacitys" direction={'row'} spacing={2}>
                    {/* <a href="https://www.linkedin.com/in/ronaldmonteirooo" target="_blank" rel="noreferrer">
                    <IconButton aria-label="LinkedIn">
                        <LinkedIn/>
                    </IconButton>
                    </a> */}
                    <IconButton  onClick={handleClickOpen} aria-label="GitHub">
                        <GitHub/>
                    </IconButton>
					{/* <a href="			mailto:ronaldmonteiro.pro@gmail.com?subject=Reportando%20problema%20%7C%20hifeniz.ei" target="_blank" rel="noreferrer"> */}
					<IconButton  onClick={handleClickOpenTwo} aria-label="GitHub">
                        <Report/>
                    </IconButton>
					{/* </a> */}
                    {/* <IconButton onClick={handleClickOpenTwo} aria-label="Google">
                        <Google/>
                    </IconButton> */}
                </Stack>            
            </Box>
            <DialogCustom
        			onClose={handleClose}
        			aria-labelledby="customized-dialog-title"
        			open={open}
      			>
        		<DialogTitleCustom id="customized-dialog-title" onClose={handleClose}>
                <Stack  direction={'row'}>
                <GitHub className='lll'/>
                {'GitHub'}
                </Stack>
        		</DialogTitleCustom>
        		<DialogContent dividers>
          		<Typography gutterBottom>
                  <Stack  direction={'row'}>
                {'Em breve o código estará disponível!'}
                <SentimentSatisfiedAltOutlinedIcon className='ll'/>

                </Stack>
                  
          		</Typography>
        		</DialogContent>
      			</DialogCustom>

                  <DialogCustom
        			onClose={handleCloseTwo}
        			aria-labelledby="customized-dialog-title"
        			open={openTwo}
      			>
        		<DialogTitleCustom id="customized-dialog-title" onClose={handleCloseTwo}>
                <Stack  direction={'row'}>
				<ReportGmailerrorredOutlinedIcon className='pads'/>
                {'Reportar'}
                </Stack>
        		</DialogTitleCustom>
        		<DialogContent dividers>
          		<Typography gutterBottom>
				<p className='pad2s'>Caso o programa apresente algum problema ou incoerência na resposta, 
				nos ajude a melhorá-lo e reporte por e-mail:</p>
                  <Stack  direction={'row'}>
                  <EmailOutlinedIcon className='ls'/>
                <strong className='colorgray'>hifenizei@gmail.com</strong>
                </Stack>
                  
          		</Typography>
        		</DialogContent>
      			</DialogCustom>
        </Box>

        
    )
}

export default Fixed;