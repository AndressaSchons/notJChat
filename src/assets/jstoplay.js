//Para setar a cor (online)//
user_status = 0 //ofline
user_status = 1 //online
user_status = 2 //ocupada

if(user_status=="0") setStatus(user_status) = ofline //and than change color to red
if(user_status=="1") setStatus(user_status) = online //and than change color to green
if(user_status=="2") setStatus(user_status) = ocupado //and than change color to yellow

function setStatus(status){

}

//Criar sala
button onClick = criaSala()

function criaSala(){
    nomeGrupo = nomeGrupoUser;
    adminGrupo = user;
    participantesGrupo = addParticipante;
    conversaNull(nomeGrupo, addParticipante);
}

function conversaNull(nome, paticipante){
    participante = userCreator, userPlus;
    priority = setPriority(response);
}

//Seta Prioridade
function setPriority(response){
    //qual a prioridade da conversa
    if(response == 0) {return red} //alta prioridade
    else if (response == 1) {return yellow} //media prioridade
    else if (response == 2) {return grey} //baixa prioridade
}
