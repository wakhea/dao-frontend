import { Paper, Grid, Typography } from "@material-ui/core";
import "./presale.scss";

const Presale = () => {
  return (
    <div id="presale-view">
      <Paper className={`ohm-card`}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <div className="card-header">
              <Typography variant="h5">Presale</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Presale;
