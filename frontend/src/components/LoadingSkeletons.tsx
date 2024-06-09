import React from "react";
import { Grid, Skeleton } from "@mui/material";

const LoadingSkeletons: React.FC = () => {
  return (
    <>
      <Skeleton variant="rectangular" width="100%" height={60} />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {Array.from(new Array(8)).map((_, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Skeleton variant="rectangular" width={250} height={400} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LoadingSkeletons;
