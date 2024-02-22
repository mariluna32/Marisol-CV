import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers";
import ProfileInfoCard from "examples/Cards/profile";
import Header from "layouts/components/Header";
import { GitHub } from "@mui/icons-material";
import { Whatsapp } from "layouts/components/icon/icon";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} xl={12}>
            <ProfileInfoCard
              title="Informacion personal"
              description="¡Hola! Soy Marisol, un programador de software en crecimiento. He completado mi etapa de estudios en el Sena y cuento con diversos conocimientos en el desarrollo de páginas web."
              info={{
                'Nombre completo': "Marisol Sevilla Forastieris",
                Telefono: "(+57) 3042682320",
                Gmail: "ms763259@gmail.com",
                Locacion: "COLOMBIA/CORDOBA/MONTERIA",
              }}
              social={[
                {
                  link: "https://github.com/mariluna32",
                  icon: <GitHub />,
                  color: "github",
                },
                {
                  link: "https://wa.link/3y6ydl",
                  icon: <Whatsapp />,
                  color: "instagram",
                }
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
