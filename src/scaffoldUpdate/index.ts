export async function scaffoldUpdate(): Promise<void> {

}

scaffoldUpdate()
  .catch(err => {
    console.error("Error updating from template ", err);
  });