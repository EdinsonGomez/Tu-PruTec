import { useState } from "react";
import {
  Popper,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/material";
import "../styles/menuComponent.scss";

const formatText = (text = "") => {
  let format = text.replace("_", " ");

  if (format) {
    format = format[0].toUpperCase() + format.slice(1);
  }

  return format;
}

const MenuComponent = (props) => {
  const {
    keyValue,
    value,
    placement = "bottom-start",
    disableHoverColor = false,
    showDivider = false,
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <ListItem
        className="menu-item"
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
        disablePadding
      >
        <ListItemButton className={`menu-item-btn ${disableHoverColor ? "disableHoverColor" : ""}`}>
          <Typography>{formatText(keyValue)}</Typography>
        </ListItemButton>
        {placement === "bottom-start" && <div className={`menu-item-underline ${!!anchorEl ? "active" : ""}`} />}
        {!!value?.length && (
          <Popper
            anchorEl={anchorEl}
            open={!!anchorEl}
            placement={placement}
          >
              <Paper
                className={`menu-item-sub-list ${placement === "bottom-start" ? "down-menu" : "left-menu"}`}
              >
                <div>
                  {Object.entries(value[0]).map(([keyValue, value]) => (
                    <List key={keyValue} sx={{ padding: 0 }} dense>
                      <MenuComponent keyValue={keyValue} value={value} placement="right-start" showDivider />
                    </List>
                  ))}
                </div>
              </Paper>
          </Popper>
        )}
      </ListItem>
      {showDivider && <Divider />}
    </>
  );
};

export default MenuComponent;
