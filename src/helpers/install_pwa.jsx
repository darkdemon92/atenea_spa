import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Install_PWA() {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const [OpenDialog, setOpenDialog] = useState(true);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      //console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);
  async function downloadApp() {
    //console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      //console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    //console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }
  return (
    <>
      {isReadyForInstall && (
        <Dialog
          open={OpenDialog}
          onClose={(e) => setOpenDialog(true)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Instalar como una APP Móvil?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Para una mejor experiencia de usuario le recomendamos que instale
              como una APP Móvil. De hacerlo podrá en lo adelante acceder por el
              acceso directo que se creará en la pantalla de inicio del móvil.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={(e) => downloadApp} autoFocus>
              Instalar
            </Button>
            <Button onClick={(e) => setOpenDialog(false)}>No Instalar</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default Install_PWA;
