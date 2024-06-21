


const formUI  = (data) =>  {


    return (`

        <formUI class="form" id="${data.formId}">
            <section>
                <input type="${data.formInputs.email.type}" placeholder="${data.formInputs.email.placeholder}" id="${data.formInputs.email.id}"/>
                <input type="${data.formInputs.password.type}" placeholder="${data.formInputs.password.placeholder}" id="${data.formInputs.password.id}"/>
                ${ !data.isLoginForm ? `<input type="${data.formInputs.confirmePassword.type}" placeholder="${data.formInputs.confirmePassword.placeholder}" id="${data.formInputs.conformePassword.id}" /> `: ""}

             </section>
             <section>
             
            </section>
        </formUI>
        `
    );

};
export default  formUI;
