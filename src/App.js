import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import css from './App.module.scss';
import logo from './images/logo.png';
import BookingSteps from './components/BookingSteps';
import FirstBookingStepForm from './components/FirstBookingStepForm';
import SecondBookingStepForm from './components/SecondBookingStepForm';

class App extends React.Component {
   state = {
      formData: {
         date: new Date(),
         passengers: { label: 2, value: 2 },
         suitcase: { label: 2, value: 2 },
         isFormEmpty: true,
      },
   };

   handleFormSubmit = formData => {
      this.setState({ formData });
   };

   render() {
      const { formData } = this.state;

      return (
         <Router>
            <div className={css.app}>
               <header className={css.header}>
                  <img src={logo} alt="Talixo logo" className={css['talixo-logo']} />
               </header>

               <div className={css['content-container']}>
                  <Route component={BookingSteps} />

                  <Route exact path="/">
                     {({ match, history }) =>
                        match && (
                           <FirstBookingStepForm
                              initialFormState={formData}
                              onSubmit={this.handleFormSubmit}
                              history={history}
                              isFormEmpty={formData.isFormEmpty}
                           />
                        )
                     }
                  </Route>
                  <Route exact path="/second-booking-step">
                     {({ match, history }) =>
                        match && (
                           <SecondBookingStepForm
                              formState={formData}
                              history={history}
                              isFormEmpty={formData.isFormEmpty}
                           />
                        )
                     }
                  </Route>
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
