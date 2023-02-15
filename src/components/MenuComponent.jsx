import { useState } from "react";
import {
  Popper,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

const MenuComponent = (props) => {
  const { keyValue, value, placement = "bottom-start" } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <ListItem
      onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
      onMouseLeave={() => setAnchorEl(null)}
      disablePadding
    >
      <ListItemButton>
        <Typography>{keyValue}</Typography>
      </ListItemButton>
      {!!value?.length && (
        <Popper anchorEl={anchorEl} open={!!anchorEl} placement={placement}>
            <Paper>
              <div>
                {Object.entries(value[0]).map(([keyValue, value]) => (
                  <List key={keyValue} dense>
                    <MenuComponent keyValue={keyValue} value={value} placement="right-start" />
                  </List>
                ))}
              </div>
            </Paper>
        </Popper>
      )}
    </ListItem>
  );
};

export default MenuComponent;
