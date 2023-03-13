import { useRouter } from "next/router";
import Link from "next/link";
import { IUser } from "@/types/user";
import { Grid, Box, Typography, Card, CardMedia } from "@mui/material";

interface IAppItemProps {
  data: IUser;
}

export default function AppItem({ data }: IAppItemProps) {
  const router = useRouter();
  const { id, email, first_name, last_name, avatar } = data;

  return (
    <Link href={`/${id}`}>
      <Box sx={{ mb: 3, strong: { color: "#000" } }}>
        <Card
          className="card-promotion"
          sx={{
            cursor: "pointer",
            position: "relative",
            width: "100%",
            borderRadius: 2,
            mb: 2,
            "&:hover": {
              img: { transform: "scale(1.02)" },
            },
          }}
        >
          <CardMedia
            component="img"
            image={avatar}
            alt={first_name}
            sx={{ border: "none" }}
          />
        </Card>
        <Grid>
          #{id}
          <br />
          <Typography>
            <strong>First Name </strong>
            {first_name}
          </Typography>
          <Typography>
            <strong>Last Name </strong>
            {last_name}
          </Typography>
          <Typography>
            <strong>Email </strong>
            {email}
          </Typography>
        </Grid>
      </Box>
    </Link>
  );
}
