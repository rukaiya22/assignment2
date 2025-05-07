import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 1.5,
    },
};

interface HeaderProps {
    title: string;
    onBack?: () => void;
    onForward?: () => void;
    disableBack?: boolean;
    disableForward?: boolean;
}


const Header: React.FC<HeaderProps> = ({ title, onBack, onForward, disableBack, disableForward }) => {
    return (
        <Paper component="div" sx={styles.root}>
            <IconButton aria-label="go back" onClick={onBack} disabled={disableBack}>
                <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>

            <Typography variant="h4" component="h3">
                {title}
            </Typography>

            <IconButton aria-label="go forward" onClick={onForward} disabled={disableForward}>
                <ArrowForwardIcon color="primary" fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default Header;
