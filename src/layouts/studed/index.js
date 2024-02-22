import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers";
import ProfileInfoCard from "examples/Cards";
import Header from "layouts/components/Header";

function Overview() {
  const certificates = {
    'Institución Educativa Alvaro Olcue Choque': {
      description: "Primaria academica /2010-1016",
    },
    'Institución Educativa Santa Teresita':{
      description: "Bachillerato academico/ 2017-2019",
    },
    'Institución Educativa Jean Piaget':{
      description: "Bachillerato Académico/ 2020-2022",
    },
  };

  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {Object.entries(certificates).map(([title, { description, info, img }]) => (
            <Grid item xs={12} md={6} xl={4} key={title}>
              <ProfileInfoCard
                title={title}
                info={description}
              />
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
