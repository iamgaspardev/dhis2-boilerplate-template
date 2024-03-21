import { NgDhis2ShellWrapper } from '@iapps/ng-dhis2-shell';
import { Button, Modal, ModalTitle,ModalContent,ButtonStrip ,ModalActions} from '@dhis2/ui';
import React ,{useState,useEffect} from 'react';
const Models=()=>{
    const [onclose,setOnclose] = useState(true)

    useEffect(()=>{
        console.log("modal excuted now --------------------");
    })
    const handleDialogy=()=>{
     setOnclose(false);
    }
    
    return (

      <Modal onClose={false} onOpen={onclose} position="middle" >
      <ModalTitle>
          Please Confirm This
      </ModalTitle>
      <ModalContent>
         Are you sure you want to grant the requested task to a user of this Request
      </ModalContent>
      <ModalActions>
          <ButtonStrip end>
              <Button onClick={handleDialogy} primary>
                  Yes
              </Button>
              <Button onClick={handleDialogy} destructive >
                  No
              </Button>
          </ButtonStrip>
      </ModalActions>
  </Modal>
    );
}
export default Models;