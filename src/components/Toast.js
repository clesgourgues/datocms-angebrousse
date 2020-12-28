import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useIntl } from 'gatsby-plugin-intl';

import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const intl = useIntl();
  const addItemNotify = item => {
    const message =
      item.customFields.length > 0
        ? intl.formatMessage({ id: 'toast_product_ring' })
        : intl.formatMessage({ id: 'toast_product' });
    toast(message);
  };

  const paymentErrorNotify = () => {
    const message = intl.formatMessage({ id: 'toast_error' });
    toast(message);
  };

  useEffect(() => {
    const { Snipcart } = window;
    if (!Snipcart) return;
    Snipcart.events.on('item.adding', addItemNotify);
    Snipcart.events.on('payment.failed', paymentErrorNotify);
  }, []);

  return <ToastContainer position='bottom-right' hideProgressBar={true} autoClose={false} />;
};

export default Toast;
