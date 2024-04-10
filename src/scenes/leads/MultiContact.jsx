import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Avatar from "@mui/material/Avatar";
import AvatarName from "../../components/AvatarName";

export default function ({ contacts }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {contacts.slice(0, 4).map((contact, index) => (
          <Avatar
            key={contact.id}
            title={contact.name}
            sx={{
              width: 35,
              height: 35,
              fontSize: 14,
              color: colors.white[500],
              ml: index !== 0 ? "-10px" : "0",
            }}
          >
            <AvatarName name={contact.name} />
          </Avatar>
        ))}
        {contacts.length > 4 && (
          <Avatar
            sx={{
              width: 35,
              height: 35,
              fontSize: 16,
              color: colors.white[500],
              ml: "-10px",
              alignItems: "center",
            }}
          >
            +{contacts.length - 4}
          </Avatar>
        )}
      </Box>
    </Box>
  );
}
