import React from "react";
import JsonDisplay from "./JsonDisplay";
import Paper from '@mui/material/Paper';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

const CardDisplay = (props) => {
    const {data, title, buttonTitle, link, colorClass} = props
    return (
        <Paper square={false} elevation={3} className="app-card-display">
            <div className={`app-card-display-title ${colorClass}`}>
                {title}
            </div>
            <JsonDisplay data={data} />
            <Link data-testid="app-card-display-footer-link" className="app-card-display-footer" to={link} style={{ textDecoration: 'none', color: 'black' }}>
                {buttonTitle}
                <NavigateNextIcon fontSize="medium"/>
            </Link>
        </Paper>
    )
}

export default CardDisplay;