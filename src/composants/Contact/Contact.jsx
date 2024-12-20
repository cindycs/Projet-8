import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import './contact.css';

/**
 * Le composant `Contact` représente un formulaire de contact avec validation,
 * utilisant la bibliothèque Formik pour la gestion de formulaire et Yup pour la validation.
 * Il permet à l'utilisateur de saisir son nom, son email et un message, puis de soumettre le formulaire.
 *
 * @returns {JSX.Element} Un élément JSX représentant le formulaire de contact avec validation intégrée.
 */

export default function Contact() {
  // Définir le schéma de validation avec Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Le nom est requis"),
    email: Yup.string()
      .email("L'email est invalide")
      .required("L'email est requis"),
    message: Yup.string()
      .required("Le message est requis")
      .min(10, "Le message doit contenir au moins 10 caractères"),
  });

  // Gestion de la soumission du formulaire
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log('Formulaire soumis avec succès !', values);
      setSubmitting(false); // Indique que la soumission est terminée
      resetForm(); // Réinitialise le formulaire après la soumission
    }, 400); // Simule une requête réseau
  };

  return (
    <div >
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form 
          className='form-contact' 
          action="https://formsubmit.io/send" 
          method="POST" 
          data-formsubmit-email="schaal.cindy@gmail.com"
       >
          <input type="hidden" name="_formsubmit_id" value="true" />
          
          <div>
             <Field type="text" name="name" id="name" className="input-form" placeholder="Votre nom.." />
             <ErrorMessage name="name" component="div" className="error" />
          </div>
       
          <div>
             <Field type="email" name="email" id="email" className="input-form" placeholder="Votre e-mail.." />
             <ErrorMessage name="email" component="div" className="error" />
          </div>
       
          <div>
             <Field as="textarea" name="message" id="message" rows="5" className="textarea-form" placeholder="Votre message.." />
             <ErrorMessage name="message" component="div" className="error" />
          </div>
       
          <button className='btn-submit' type="submit" disabled={isSubmitting}>
             {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
       </Form>
       
        )}
      </Formik>
    </div>
  );
}
