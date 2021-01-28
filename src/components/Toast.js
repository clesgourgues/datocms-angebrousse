import React, { useEffect, useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'gatsby-plugin-intl';

import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const intl = useIntl();
  const unsuscribeAdd = useRef();
  const unsuscribeError = useRef();
  const suscribeTosnipcart = useCallback(() => {
    const { Snipcart } = window;
    if (!Snipcart) return;
    if (unsuscribeAdd.current) {
      unsuscribeAdd.current();
    }
    if (unsuscribeError.current) {
      unsuscribeError.current();
    }
    unsuscribeAdd.current = Snipcart.events.on('item.adding', addItemNotify);
    unsuscribeError.current = Snipcart.events.on('payment.failed', paymentErrorNotify);
  }, [intl.locale]);

  const addItemNotify = item => {
    const message =
      item.customFields.length > 0
        ? intl.formatMessage({ id: 'toast_product_ring' })
        : intl.formatMessage({ id: 'toast_product' });
    toast(message);
  };

  const paymentErrorNotify = () => {
    const message = intl.formatMessage({ id: 'toast_error' });
    toast.clearWaitingQueue();
    toast(message);
  };

  useEffect(() => {
    suscribeTosnipcart();
  }, [suscribeTosnipcart]);

  return <></>;
};

export default Toast;
