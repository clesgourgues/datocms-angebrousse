export const locales = {
  fr: {
    actions: {
      continue_shopping: '< Poursuivre mes achats',
      checkout: 'Procéder au paiement',
      back_to_store: "Retour à l'e-shop",
      change_password: 'Changer mon mot de passe',
      back_to_orders: 'Retour aux informations',
      save_changes: 'Enregistrer'
    },
    header: {
      title_cart_summary: 'Panier'
    },
    discounts: {
      title: 'Code Promo'
    },
    address_form: {
      address1: 'Adresse',
      email: 'Email'
    },
    signin_form: {
      email: 'Email',
      dont_have_an_account: 'Pas de compte ? Inscrivez-vous ici.',
      close_form: '< Retour',
      forgot_your_password: 'Mot de passe oublié ?'
    },
    register_form: {
      email: 'Email',
      already_have_an_account: 'Vous avez un compte ?'
    },
    errors: {
      promo_code_is_invalid: "Ce code n'est pas valide",
      email: 'Veuillez spécifier une adresse mail valide',
      customer_exists: 'Cet email est déjà utilisé.',
      invalid_credentials: 'Email ou mot de passe invalide',
      payment_failed: {
        title: 'Impossible de finaliser votre paiement.',
        description:
          'Veuillez vérifier vos informations de carte de crédit, ou réessayer plus tard.'
      },
      domain_crawling: {
        title: "Votre commande n'a pas pu être finalisée.",
        description:
          "Vous n'avez pas été débité. Veuillez contacter Angèle Brousse pour plus de détails."
      },
      quantity_out_of_stock:
        'Désolé, ce produit n’est plus en stock. Pour continuer, veuillez retirer cet article de votre panier.',
      quantity_revised:
        'Les stocks actuels ne vous permettent pas de commander les quantités demandées.'
    },
    payment: {
      continue_to_payment: 'Valider et payer',
      place_order: 'Valider ma commande'
    },
    confirmation: {
      thank_you_for_your_order: 'Votre facture vous a été envoyée par email.'
    },
    cart: {
      summary: 'Récapitulatif de votre commande',
      invoice_number: 'Facture',
      taxes_included_in_price: 'La livraison est TTC'
    },
    cart_summary: {
      discount: 'Code Promo (réduction HT)'
    },
    discount_box: {
      promocode_applied: 'Code promo appliqué'
    },
    forgot_password_form: {
      title: 'Réinitialiser mon mot de passe',
      instructions:
        'Saisissez votre email, nous vous enverrons un lien pour réinitialiser votre mot de passe.',
      email: 'Email',
      email_instructions:
        'Nous vous avons envoyé un email contenant un lien. Merci de cliquer sur ce lien pour réinitialiser votre mot de passe.',
      action: 'Envoyer le mail de réinitialisation'
    },
    reset_password_form: {
      title: 'Réinitialiser mon mot de passe',
      password: 'Nouveau mot de passe',
      confirmation_password: 'Entrez à nouveau votre mot de passe',
      action: 'Réinitialiser'
    },
    change_password_form: {
      title: 'Changer mon mot de passe ',
      current_password: 'Mot de passe',
      password: 'Nouveau mot de passe',
      confirmation_password: 'Saisissez à nouveau votre mot de passe',
      action: 'Changer mon mot de passe'
    },
    customer_details: {
      title: 'Informations du compte'
    },
    customer_dashboard: {
      orders: 'Commandes',
      view_invoice: 'Détails'
    }
  },
  en: {
    actions: {
      continue_shopping: '< Continue shopping',
      forgot_password_email_sent_message:
        'An email has been sent to you with the instructions to reset your password. Please consult it andfollow the steps.'
    },
    header: {
      title_cart_summary: 'Your cart'
    },
    signin_form: {
      close_form: '< Back'
    },
    error: {
      quantity_out_of_stock:
        'Unfortunately, this item is out of stock. To continue, please remove it from your cart.'
    },
    confirmation: {
      thank_you_for_your_order: 'Your invoice has been sent by email.'
    },
    customer_dashboard: {
      view_invoice: 'Details'
    }
  }
};
