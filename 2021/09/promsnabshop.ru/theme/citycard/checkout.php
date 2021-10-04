<?php

include_once("./calc_deliv_cdek_php/CalculatePriceDeliveryCdek.php");

class ControllerCitycardCheckout extends Controller {

    private $API_GRASTIN  = 'd7511893-1fec-4c73-a554-a5dfe026fc5c';
    private $LINK_GRASTIN = 'http://api.grastin.ru/api.php';

    private $authLogin_CDEK = 'K6VwbkktFyhqhEMeoMSiW9S3wt6bQzSe';
    private $password_CDEK  = '8yxRJ8DXZHNx4eng9nvzurROeTeyqkvk';

    public function index() {

        $this->language->load('citycard/checkout');

        $this->data['breadcrumbs'] = array();

        $this->data['breadcrumbs'][] = array(
            'text'      => $this->language->get('text_home'),
            'href'      => $this->url->link('common/home'),
            'separator' => false
        );

        $this->data['breadcrumbs'][] = array(
            'text'      => $this->language->get('text_cart'),
            'href'      => $this->url->link('checkout/cart'),
            'separator' => $this->language->get('text_separator')
        );

        $this->data['breadcrumbs'][] = array(
            'text'      => $this->language->get('heading_title'),
            'href'      => $this->url->link('citycard/checkout', '', 'SSL'),
            'separator' => $this->language->get('text_separator')
        );

        $this->document->setTitle($this->language->get('heading_title'));

        /* shipping methods */
        $this->load->model('account/address');

        /*
        if ($this->customer->isLogged() && isset($this->session->data['shipping_address_id'])) {
            $shipping_address = $this->model_account_address->getAddress($this->session->data['shipping_address_id']);
        } elseif (isset($this->session->data['guest'])) {
            $shipping_address = $this->session->data['guest']['shipping'];
        }
        */
        $shipping_address = array(
                                  'country_id' => 176, // Russia
                                  'zone_id'    => 2761,   // Moscow
                                 );
        //if (!empty($shipping_address)) {
        if (true) {
            // Shipping Methods
            $quote_data = array();

            $this->load->model('setting/extension');

            $results = $this->model_setting_extension->getExtensions('shipping');

            foreach ($results as $result) {
                if ($this->config->get($result['code'] . '_status')) {
                    $this->load->model('shipping/' . $result['code']);

                    $quote = $this->{'model_shipping_' . $result['code']}->getQuote($shipping_address);

                    if ($quote) {
                        $quote_data[$result['code']] = array(
                            'title'      => $quote['title'],
                            'quote'      => $quote['quote'],
                            'sort_order' => $quote['sort_order'],
                            'error'      => $quote['error']
                        );
                    }
                }
            }

            $sort_order = array();

            foreach ($quote_data as $key => $value) {
                $sort_order[$key] = $value['sort_order'];
            }
            array_multisort($sort_order, SORT_ASC, $quote_data);
            $this->data['shipping_methods'] = $quote_data;
        }

        $this->data['code'] = '';
        $this->data['text_shipping_method'] = '';

        /* shipping methods */

        /* payment mathods */

        $total_data = array();
        $total = 0;
        $taxes = $this->cart->getTaxes();

        $this->load->model('setting/extension');

        $sort_order = array();

        $results = $this->model_setting_extension->getExtensions('total');

        foreach ($results as $key => $value) {
            $sort_order[$key] = $this->config->get($value['code'] . '_sort_order');
        }

        array_multisort($sort_order, SORT_ASC, $results);

        foreach ($results as $result) {
            if ($this->config->get($result['code'] . '_status')) {
                $this->load->model('total/' . $result['code']);

                $this->{'model_total_' . $result['code']}->getTotal($total_data, $total, $taxes);
            }
        }


        $method_data = array();

        $this->load->model('setting/extension');

        $payment_address = array(
                                  'country_id' => 176, // Russia
                                  'zone_id'    => 2761,   // Moscow
                                 );

        $results = $this->model_setting_extension->getExtensions('payment');

        foreach ($results as $result) {
            if ($this->config->get($result['code'] . '_status')) {
                $this->load->model('payment/' . $result['code']);

                $method = $this->{'model_payment_' . $result['code']}->getMethod($payment_address, $total);

                if ($method) {
                    $method_data[$result['code']] = $method;
                }
            }
        }

        $sort_order = array();

        foreach ($method_data as $key => $value) {
            $sort_order[$key] = $value['sort_order'];
        }

        array_multisort($sort_order, SORT_ASC, $method_data);

        $this->data['payment_methods'] = $method_data;
        $this->data['text_payment_method'] = 'Способ оплаты';

        // add input
        $client_type = isset($this->session->data['client_type']) ? $this->session->data['client_type'] : '';
        $this->data['client_type'] = $client_type;
        $company_type = isset($this->session->data['company_type']) ? $this->session->data['company_type'] : 'legal';
        $this->data['company_type'] = $company_type;
        $this->data['heading_title'] = 'Способ оплаты';
        /* payment mathods */
        

        // Totals
        $total_data = array();
        $total = 0;
        $taxes = $this->cart->getTaxes();

        $this->load->model('setting/extension');

        $sort_order = array();

        $results = $this->model_setting_extension->getExtensions('total');

        foreach ($results as $key => $value) {
            $sort_order[$key] = $this->config->get($value['code'] . '_sort_order');
        }

        array_multisort($sort_order, SORT_ASC, $results);

        foreach ($results as $result) {
            if ($this->config->get($result['code'] . '_status')) {
                $this->load->model('total/' . $result['code']);
                $this->{'model_total_' . $result['code']}->getTotal($total_data, $total, $taxes);
            }
        }
        $this->data['total'] = $total;

        $delivery_city = !empty($this->session->data['delivery_city']) ? $this->session->data['delivery_city'] : '';
        $this->data['delivery_city'] = $delivery_city;
        $receiverCityId = '';
        $sql = 'SELECT sdec_id FROM sdec_city WHERE CityName="'. $delivery_city .'" GROUP BY CityName';
        $query = $this->db->query($sql);
        if (count($query->rows) > 0) {
            $receiverCityId = $query->rows[0]['sdec_id'];
        }
        $pickup_pvz = '';
        //$sql = 'SELECT name, deliveryperiod, gid FROM boxberry_pvz WHERE city="'. $delivery_city .'" ORDER BY name';
        $sql = 'SELECT code, name, street, house, office FROM sdec_pvz WHERE city="'. $delivery_city .'" ORDER BY name';
        $query = $this->db->query($sql);
        if (count($query->rows) > 0) {
            $pickup_pvz = '<div style="width: 100%; padding-left: 35px;"><input type="hidden" name="sdek_city_id" value="'.$receiverCityId.'"><select name="pvz" id="select_pickup_pvz">';
            foreach($query->rows as $k => $v) {
                $pickup_pvz .= '<option value="'. $v['code'] .'">'. $v['name'] .', '. $v['street'] .', '. $v['house'] .', '. $v['office'] .'</option>';
            }
            $pickup_pvz .= '</select></div>';
        }
        $this->data['pickup_pvz'] = $pickup_pvz;
        $pickup_cost = $flat_cost = $express_cost = '';
        $text_del1 = 450;
        $text_del2 = 350;
        if (!empty($delivery_city) && $delivery_city != 'Москва' && $delivery_city != 'Санкт-Петербург') {
            /*$data = '<File> <API>'. $this->API_GRASTIN .'</API> <Method>CalcShipingCost</Method><Orders><Order idregion="' . $delivery_city .'" selfpickup="true" weight="4000" /></Orders></File>';
            $xml = $this->grastin_query($this->LINK_GRASTIN, $data);
            if (isset($xml->Order[0]->status) && $xml->Order[0]->status == 'Ok') {
                $text_del2 += (int)$xml->Order[0]->shippingcost;
                $text_del2 += (int)$xml->Order[0]->shippingcostdistance;
                $text_del2 += (int)$xml->Order[0]->commission;
                $text_del2 += (int)$xml->Order[0]->safetystock;
                $text_del2 += (int)$xml->Order[0]->additionalshippingcosts;
                $text_del2 += (int)$xml->Order[0]->orderprocessing;
                $text_del2 += (int)$xml->Order[0]->commissionfastmoney;
            }*/
          if (!empty($receiverCityId)) {
            //создаём экземпляр объекта CalculatePriceDeliveryCdek
            /*$calc1 = new CalculatePriceDeliveryCdek();
            //Авторизация. Для получения логина/пароля (в т.ч. тестового) обратитесь к разработчикам СДЭК
            $calc1->setAuth($this->authLogin_CDEK, $this->password_CDEK);
            //устанавливаем город-отправитель
            $calc1->setSenderCityId('137');
            //устанавливаем город-получатель
            $calc1->setReceiverCityId($receiverCityId);
            //устанавливаем дату планируемой отправки
            $calc1->setDateExecute(date("Y-m-d", time()+3600*24));
            //задаём список тарифов с приоритетами
            $calc1->addTariffPriority('137');
            //устанавливаем тариф по-умолчанию
            //$calc->setTariffId('137');
            //устанавливаем режим доставки
            //$calc->setModeDeliveryId('1');
            //добавляем места в отправление
            $calc1->addGoodsItemBySize('4', '30', '20', '30');
            //$calc->addGoodsItemByVolume('0.1', '0.1');
            if ($calc1->calculate() === true) {
                $res1 = $calc1->getResult();
                $price_cdek1 = (int)$res1['result']['price'];
                $price_cdek_20 = $price_cdek1*20/100;
                $price_cdek1 = $price_cdek1 + (int)$price_cdek_20;
                if ($price_cdek1 < 450) $price_cdek1 = 450;
                $deliveryPeriodMin = (int)$res1['result']['deliveryPeriodMin'];
                $deliveryPeriodMax = (int)$res1['result']['deliveryPeriodMax'];
                if ($city != 'Москва' && $city != 'Санкт-Петербург') {
                    $deliveryPeriodMin = $deliveryPeriodMin + 2;
                    $deliveryPeriodMax = $deliveryPeriodMax + 2;
                }
                if ($deliveryPeriodMin == $deliveryPeriodMax) $period1 = $deliveryPeriodMin;
                else $period1 = $deliveryPeriodMin . '-' . $deliveryPeriodMax;
                //$period1 = $deliveryPeriodMin . '-50';
                //if ((int)$price_order == 1) $period1 = '2-60';
                $text_del1 = $price_cdek1;
                $cdek_text_del1 = '<b><i>'.$price_cdek1.'</i></b> р. <br><font style="font-size: 11px;">количество рабочих дней: <b><i>'.$period1.'</i></b></font>';
            }

            //создаём экземпляр объекта CalculatePriceDeliveryCdek
            $calc2 = new CalculatePriceDeliveryCdek();
            //Авторизация. Для получения логина/пароля (в т.ч. тестового) обратитесь к разработчикам СДЭК
            $calc2->setAuth($this->authLogin_CDEK, $this->password_CDEK);
            //устанавливаем город-отправитель
            $calc2->setSenderCityId('137');
            //устанавливаем город-получатель
            $calc2->setReceiverCityId($receiverCityId);
            //устанавливаем дату планируемой отправки
            $calc2->setDateExecute(date("Y-m-d", time()+3600*24));
            //задаём список тарифов с приоритетами
            $calc2->addTariffPriority('136');
            //добавляем места в отправление
            $calc2->addGoodsItemBySize('4', '30', '20', '30');
            if ($calc2->calculate() === true) {
                $res2 = $calc2->getResult();
                $price_cdek2 = (int)$res2['result']['price'];
                $price_cdek_20 = $price_cdek2*20/100;
                $price_cdek2 = $price_cdek2 + (int)$price_cdek_20;
                if ($price_cdek2 < 350) $price_cdek2 = 350;
                $deliveryPeriodMin = (int)$res2['result']['deliveryPeriodMin'];
                $deliveryPeriodMax = (int)$res2['result']['deliveryPeriodMax'];
                if ($city != 'Москва' && $city != 'Санкт-Петербург') {
                    $deliveryPeriodMin = $deliveryPeriodMin + 2;
                    $deliveryPeriodMax = $deliveryPeriodMax + 2;
                }
                if ($deliveryPeriodMin == $deliveryPeriodMax) $period2 = $deliveryPeriodMin;
                else $period2 = $deliveryPeriodMin . '-' . $deliveryPeriodMax;
                //$period2 = $deliveryPeriodMin . '-50';
                //if ((int)$price_order == 1) $period2 = '2-60';
                $text_del2 = $price_cdek2;
                $cdek_text_del2 = '<b><i>'.$price_cdek2.'</i></b> р. <br><font style="font-size: 11px;">количество рабочих дней: <b><i>'.$period2.'</i></b></font>';
            }*/
          }
            if ($text_del1 < 450) $text_del1 = 450;
            if ($text_del2 < 350) $text_del2 = 350;
        } else if ($delivery_city == 'Москва') {
            $text_del1 = 450;
            $text_del2 = 350;
        } else if ($delivery_city == 'Санкт-Петербург') {
            $text_del1 = 450;
            $text_del2 = 350;
        }

        $products = $this->cart->getProducts();
        $delivery_1200 = array(926, 1489, 1491, 1490, 1493, 1496, 1494, 206, 1495, 1166, 1494, 1497, 1169, 1473, 1498, 1500, 1499);
        $d1200 = 0;
        $brand_id = 0;
        foreach($products as $product) {
            $sql = 'SELECT category_id FROM oc_product_to_category WHERE product_id="'. $product['product_id'] .'" AND main_category="1"';
            $query = $this->db->query($sql);
            if (count($query->rows) > 0) {
                if (in_array($query->rows[0]['category_id'], $delivery_1200)) $d1200 = $query->rows[0]['category_id'];
            }
            $sql = 'SELECT manufacturer_id FROM oc_product WHERE product_id="'. $product['product_id'] .'"';//, delivery_express_price, delivery_courier_price, delivery_pvz_price
            $query = $this->db->query($sql);
            if (count($query->rows) > 0) {
                if ((int)$query->rows[0]['manufacturer_id'] == 11) $brand_id = 11;
                elseif ((int)$query->rows[0]['manufacturer_id'] == 13) $brand_id = 13;
                elseif ((int)$query->rows[0]['manufacturer_id'] == 104) $brand_id = 104;
                if ((int)$query->rows[0]['manufacturer_id'] == 34) $brand_id = 34;

                /*if ($query->rows[0]['delivery_express_price'] != '') $express_cost = $query->rows[0]['delivery_express_price'];
                if ($query->rows[0]['delivery_courier_price'] != '') $text_del1 = (int)$query->rows[0]['delivery_courier_price'];
                if ($query->rows[0]['delivery_pvz_price'] != '') $text_del2 = (int)$query->rows[0]['delivery_pvz_price'];*/
            }
        }
        if ($text_del1 > 0) {
            $flat_cost = $text_del1 . ' руб. (оплата через сайт)';
        }
        if ($text_del2 > 0) {
            $pickup_cost = $text_del2 . ' руб. (оплата через сайт)';
        }
        if ($express_cost != '') {
            $express_cost = $express_cost . ' руб. (оплата через сайт)';
        }
        $this->data['express_cost'] = $express_cost;
        $this->data['pickup_cost'] = $pickup_cost;
        $this->data['flat_cost'] = $flat_cost;
        $this->data['d1200'] = $d1200;
        $this->data['brand_id'] = $brand_id;

        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/citycard/checkout.tpl')) {
          $this->template = $this->config->get('config_template') . '/template/citycard/checkout.tpl';
        } else {
          $this->template = 'default/template/citycard/checkout.tpl';
        }

         $this->children = array(
          'common/column_left',
          'common/column_right',
          'common/content_top',
          'common/content_bottom',
          'common/footer',
          'common/header'
        );

        // call the "View" to render the output
        $this->response->setOutput($this->render());

    }

    public function ajax() {

        $firstname = $_POST['firstname'];
        $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];

        // $props_contragent = $_POST['props_contragent'];
        $props_company_name = $_POST['props_company_name'];
        $props_company_adress = isset($_POST['props_company_adress']) ? $_POST['props_company_adress'] : '';
        $props_inn = $_POST['props_inn'];
        $props_kpp = isset($_POST['props_kpp']) ? $_POST['props_kpp'] : '';
        $props_ogrn = isset($_POST['props_ogrn']) ? $_POST['props_ogrn'] : '';
        $props_okpo = isset($_POST['props_okpo']) ? $_POST['props_okpo'] : '';

        $checking_account_bik = $_POST['checking_account_bik'];
        $checking_account_bank = isset($_POST['checking_account_bank']) ? $_POST['checking_account_bank'] : '';
        $checking_account_adress = isset($_POST['checking_account_adress']) ? $_POST['checking_account_adress'] : '';
        $checking_account_korr = isset($_POST['checking_account_korr']) ? $_POST['checking_account_korr'] : '';
        $checking_account = $_POST['checking_account'];

        $shipping_method_code = $_POST['shipping_method_code'];
        $shipping_method_title = $_POST['shipping_method_title'];
        $payment_method_code = $_POST['payment_method_code'];
        $payment_method_title = $_POST['payment_method_title'];

        $sdek_city_id = isset($_POST['sdek_city_id']) ? $_POST['sdek_city_id'] : 0;
        $price_cdek = isset($_POST['price_cdek']) ? $_POST['price_cdek'] : 0;
        $tariff_cdek = isset($_POST['tariff_cdek']) ? ' '.$_POST['tariff_cdek'] : 0;
        $tariff_type = isset($_POST['tariff_type']) ? $_POST['tariff_type'] : 0;
        $company_type = isset($_POST['company_type']) ? $_POST['company_type'] : 'legal';
        $piter_city = isset($_POST['piter_city']) ? $_POST['piter_city'] : '';
        $pvz = isset($_POST['pvz']) ? $_POST['pvz'] : '';
        /*if ($pvz != '') {
            $pvz_ar = @explode(';', $pvz);
            $pvz_code = isset($pvz_ar[0]) ? $pvz_ar[0] : '';
            $pvz_name = isset($pvz_ar[1]) ? $pvz_ar[1] : '';
        } else {
            $pvz_code = $pvz_name = '';
        }*/
        $pickup_pvzz = '';
        $pickup_pvz = isset($_POST['pickup_pvz']) ? $_POST['pickup_pvz'] : '';

        // address
        $postcode = isset($_POST['postcode']) ? $_POST['postcode'] : '';
        $city = isset($_POST['city']) ? $_POST['city'] : '';
        $ulica = isset($_POST['ulica']) ? $_POST['ulica'] : '';
        $dom = isset($_POST['dom']) ? $_POST['dom'] : '';
        $kv = isset($_POST['kv']) ? $_POST['kv'] : '';

        $comment = isset($_POST['comment']) ? $_POST['comment'] : '';

        $brand_id = isset($_POST['brand_id']) ? $_POST['brand_id'] : '';

        // some currencies hack
        $this->session->data['currency'] = 'RUB';
        $this->session->data['comment'] = $comment;
        $this->session->data['guest']['shipping'] = array(
                                                        'firstname'      => $firstname,
                                                        'lastname'       => $lastname,
                                                        'company'        => '',
                                                        'address_1'      => $address,
                                                        'address_2'      => '',
                                                        'city'           => $city,
                                                        'ulica'          => $ulica,
                                                        'dom'            => $dom,
                                                        'kv'             => $kv,
                                                        'postcode'       => $postcode,
                                                        'zone'           => '',
                                                        'zone_id'        => '',
                                                        'country'        => '',
                                                        'country_id'     => '',
                                                        'address_format' => '',

                                                        // 'props_contragent' => $props_contragent,
                                                        'props_company_name'   => $props_company_name,
                                                        'props_company_adress' => $props_company_adress,
                                                        'props_inn'            => $props_inn,
                                                        'props_kpp'            => $props_kpp,
                                                        'props_ogrn'           => $props_ogrn,
                                                        'props_okpo'           => $props_okpo,

                                                        'checking_account_bik'    => $checking_account_bik,
                                                        'checking_account_bank'   => $checking_account_bank,
                                                        'checking_account_adress' => $checking_account_adress,
                                                        'checking_account_korr'   => $checking_account_korr,
                                                        'checking_account'        => $checking_account,
                                                         );
        $this->session->data['guest']['payment'] = array(
                                                        'firstname'      => $firstname,
                                                        'lastname'       => $lastname,
                                                        'company'        => '',
                                                        'company_id'     => '',
                                                        'tax_id'         => '',
                                                        'address_1'      => $address,
                                                        'address_2'      => '',
                                                        'city'           => '',
                                                        'postcode'       => '',
                                                        'zone'           => '',
                                                        'zone_id'        => '',
                                                        'country'        => '',
                                                        'country_id'     => '',
                                                        'address_format' => '',
                                                        );

        $shipping_address = array(
                                  'country_id' => 176, // Russia
                                  'zone_id'    => 2761,// Moscow
                                 );

        if (!empty($shipping_address)) {
            // Shipping Methods
            $quote_data = array();

            $this->load->model('setting/extension');

            $results = $this->model_setting_extension->getExtensions('shipping');

            foreach($results as $result) {
                if ($this->config->get($result['code'] . '_status')) {
                    $this->load->model('shipping/' . $result['code']);

                    $quote = $this->{'model_shipping_' . $result['code']}->getQuote($shipping_address);

                    if ($quote) {
                        $quote_data[$result['code']] = array(
                            'title'      => $quote['title'],
                            'quote'      => $quote['quote'],
                            'sort_order' => $quote['sort_order'],
                            'error'      => $quote['error']
                        );
                    }
                }
            }

            $sort_order = array();

            foreach ($quote_data as $key => $value) {
                $sort_order[$key] = $value['sort_order'];
            } 
            array_multisort($sort_order, SORT_ASC, $quote_data);

            $this->session->data['shipping_methods'] = $quote_data;
        }

        $shipping = explode('.', $shipping_method_code);
        $receiverCityId = '';
        $sql = 'SELECT sdec_id FROM sdec_city WHERE CityName="'. $city .'" GROUP BY CityName';
        $query = $this->db->query($sql);
        if (count($query->rows) > 0) {
            $receiverCityId = $query->rows[0]['sdec_id'];
        }
        if ($shipping_method_code == 'cdek') {
            $this->session->data['shipping_method']['code'] = 'cdek';
            $this->session->data['shipping_method']['title'] = 'Доставка СДЭК'.$tariff_cdek;
            if ($pvz_name != '') $this->session->data['shipping_method']['title'] .= ' '.$pvz_name;
            $this->session->data['shipping_method']['cost'] = $price_cdek;
            $this->session->data['shipping_method']['tax_class_id'] = 0;
        } elseif ($shipping_method_code == 'express') {
            $express_price = 600;
            $products = $this->cart->getProducts();
            /*foreach($products as $product) {
                $sql = 'SELECT delivery_express_price FROM oc_product WHERE product_id="'. $product['product_id'] .'"';
                $query = $this->db->query($sql);
                if (count($query->rows) > 0) {
                    if ((int)$query->rows[0]['delivery_express_price'] != '') $express_price = $query->rows[0]['delivery_express_price'];
                }
            }*/
            //if ((int)$brand_id == 104) $express_price = 800;
            $this->session->data['shipping_method']['code'] = 'express';
            $this->session->data['shipping_method']['title'] = 'Экспресс доставка '.$express_price.' руб.';
            $this->session->data['shipping_method']['cost'] = $express_price;
            $this->session->data['shipping_method']['tax_class_id'] = 0;
        } elseif ($shipping_method_code == 'flat.flat') {
            $pvz = '';
            $flat_price = 450;
            $text_del1 = 450;
            if (!empty($city) && $city != 'Москва' && $city != 'Санкт-Петербург') {
              if (!empty($receiverCityId)) {
                //создаём экземпляр объекта CalculatePriceDeliveryCdek
                /*$calc1 = new CalculatePriceDeliveryCdek();
                //Авторизация. Для получения логина/пароля (в т.ч. тестового) обратитесь к разработчикам СДЭК
                $calc1->setAuth($this->authLogin_CDEK, $this->password_CDEK);
                //устанавливаем город-отправитель
                $calc1->setSenderCityId('137');
                //устанавливаем город-получатель
                $calc1->setReceiverCityId($receiverCityId);
                //устанавливаем дату планируемой отправки
                $calc1->setDateExecute(date("Y-m-d", time()+3600*24));
                //задаём список тарифов с приоритетами
                $calc1->addTariffPriority('137');
                //устанавливаем тариф по-умолчанию
                //$calc->setTariffId('137');
                //устанавливаем режим доставки
                //$calc->setModeDeliveryId('1');
                //добавляем места в отправление
                $calc1->addGoodsItemBySize('4', '30', '20', '30');
                //$calc->addGoodsItemByVolume('0.1', '0.1');
                if ($calc1->calculate() === true) {
                    $res1 = $calc1->getResult();
                    $price_cdek1 = (int)$res1['result']['price'];
                    $price_cdek_20 = $price_cdek1*20/100;
                    $price_cdek1 = $price_cdek1 + (int)$price_cdek_20;
                    if ($price_cdek1 < 450) $price_cdek1 = 450;
                    $deliveryPeriodMin = (int)$res1['result']['deliveryPeriodMin'] + 2;
                    $deliveryPeriodMax = (int)$res1['result']['deliveryPeriodMax'] + 2;
                    if ($deliveryPeriodMin == $deliveryPeriodMax) $period1 = $deliveryPeriodMin;
                    else $period1 = $deliveryPeriodMin . '-' . $deliveryPeriodMax;
                    //$period1 = $deliveryPeriodMin . '-50';
                    //if ((int)$price_order == 1) $period1 = '2-60';
                    $text_del1 = $price_cdek1;
                    $cdek_text_del1 = '<b><i>'.$price_cdek1.'</i></b> р. <br><font style="font-size: 11px;">количество рабочих дней: <b><i>'.$period1.'</i></b></font>';
                }*/
              }
                /*$data = '<File> <API>'. $this->API_GRASTIN .'</API> <Method>CalcShipingCost</Method><Orders><Order idregion="' . $city .'" selfpickup="false" weight="4000" /></Orders></File>';
                $xml = $this->grastin_query($this->LINK_GRASTIN, $data);
                if (isset($xml->Order[0]->status) && $xml->Order[0]->status == 'Ok') {
                    $text_del1 += (int)$xml->Order[0]->shippingcost;
                    $text_del1 += (int)$xml->Order[0]->shippingcostdistance;
                    $text_del1 += (int)$xml->Order[0]->commission;
                    $text_del1 += (int)$xml->Order[0]->safetystock;
                    $text_del1 += (int)$xml->Order[0]->additionalshippingcosts;
                    $text_del1 += (int)$xml->Order[0]->orderprocessing;
                    $text_del1 += (int)$xml->Order[0]->commissionfastmoney;
                }*/
                if ($text_del1 < 450) $text_del1 = 450;
                //if ((int)$brand_id == 104) $text_del1 += 200;
            } elseif ($city == 'Москва1' && (int)$brand_id == 104) $text_del1 = 650;
            elseif ($city == 'Санкт-Петербург1' && (int)$brand_id == 104) $text_del1 = 650;
            elseif ($city == 'Москва') $text_del1 = 450;
            elseif ($city == 'Санкт-Петербург') $text_del1 = 450;
            if ((int)$text_del1 > 0) $flat_price = $text_del1;
            $products = $this->cart->getProducts();
            //$delivery_1200 = array(926, 1489, 1491, 1490, 1493, 1496, 1496, 206, 1495, 1495, 1497, 1169, 1473, 1498, 1500, 1499);
            //$d1200 = 0;
            foreach($products as $product) {
                /*$sql = 'SELECT category_id FROM oc_product_to_category WHERE product_id="'. $product['product_id'] .'" AND main_category="1"';
                $query = $this->db->query($sql);
                if (count($query->rows) > 0) {
                    if (in_array($query->rows[0]['category_id'], $delivery_1200)) $d1200 = $query->rows[0]['category_id'];
                }*/
                /*$sql = 'SELECT delivery_courier_price FROM oc_product WHERE product_id="'. $product['product_id'] .'"';
                $query = $this->db->query($sql);
                if (count($query->rows) > 0) {
                    if ((int)$query->rows[0]['delivery_courier_price'] != '') $flat_price = $query->rows[0]['delivery_courier_price'];
                }*/
            }
            //if ($d1200 > 0) $flat_price = 1200;
            $this->session->data['shipping_method']['code'] = 'flat.flat';
            $this->session->data['shipping_method']['title'] = "Доставка до подъезда/двери $city, $ulica, $dom, $kv";
            $this->session->data['shipping_method']['cost'] = $flat_price;
            $this->session->data['shipping_method']['tax_class_id'] = 0;
        } elseif ($shipping_method_code == 'piter') {
            $this->session->data['shipping_method']['code'] = 'piter';
            $this->session->data['shipping_method']['title'] = 'Доставка по региону Санкт-Петербурга 600 руб.';
            $this->session->data['shipping_method']['cost'] = 600;
            $this->session->data['shipping_method']['tax_class_id'] = 0;
            $this->session->data['guest']['shipping']['city'] = $piter_city;
        } elseif ($shipping_method_code == 'pickup.pickup') {
            $this->session->data['guest']['shipping']['city'] = $city;
            $pickup_pvzz = $pickup_pvz;
            $this->session->data['shipping_method']['code'] = 'pickup.pickup';
            $text_del2 = 350;
            if (!empty($city) && $city != 'Москва' && $city != 'Санкт-Петербург') {
              if (!empty($receiverCityId)) {
                //создаём экземпляр объекта CalculatePriceDeliveryCdek
                /*$calc2 = new CalculatePriceDeliveryCdek();
                //Авторизация. Для получения логина/пароля (в т.ч. тестового) обратитесь к разработчикам СДЭК
                $calc2->setAuth($this->authLogin_CDEK, $this->password_CDEK);
                //устанавливаем город-отправитель
                $calc2->setSenderCityId('137');
                //устанавливаем город-получатель
                $calc2->setReceiverCityId($receiverCityId);
                //устанавливаем дату планируемой отправки
                $calc2->setDateExecute(date("Y-m-d", time()+3600*24));
                //задаём список тарифов с приоритетами
                $calc2->addTariffPriority('136');
                //добавляем места в отправление
                $calc2->addGoodsItemBySize('4', '30', '20', '30');
                if ($calc2->calculate() === true) {
                    $res2 = $calc2->getResult();
                    $price_cdek2 = (int)$res2['result']['price'];
                    $price_cdek_20 = $price_cdek2*20/100;
                    $price_cdek2 = $price_cdek2 + (int)$price_cdek_20;
                    if ($price_cdek2 < 350) $price_cdek2 = 350;
                    $deliveryPeriodMin = (int)$res2['result']['deliveryPeriodMin'] + 2;
                    $deliveryPeriodMax = (int)$res2['result']['deliveryPeriodMax'] + 2;
                    if ($deliveryPeriodMin == $deliveryPeriodMax) $period2 = $deliveryPeriodMin;
                    else $period2 = $deliveryPeriodMin . '-' . $deliveryPeriodMax;
                    //$period2 = $deliveryPeriodMin . '-50';
                    //if ((int)$price_order == 1) $period2 = '2-60';
                    $text_del2 = $price_cdek2;
                    $cdek_text_del2 = '<b><i>'.$price_cdek2.'</i></b> р. <br><font style="font-size: 11px;">количество рабочих дней: <b><i>'.$period2.'</i></b></font>';
                }*/
              }
                /*$data = '<File> <API>'. $this->API_GRASTIN .'</API> <Method>CalcShipingCost</Method><Orders><Order idregion="' . $city .'" selfpickup="true" weight="4000" /></Orders></File>';
                $xml = $this->grastin_query($this->LINK_GRASTIN, $data);
                if (isset($xml->Order[0]->status) && $xml->Order[0]->status == 'Ok') {
                    $text_del2 += (int)$xml->Order[0]->shippingcost;
                    $text_del2 += (int)$xml->Order[0]->shippingcostdistance;
                    $text_del2 += (int)$xml->Order[0]->commission;
                    $text_del2 += (int)$xml->Order[0]->safetystock;
                    $text_del2 += (int)$xml->Order[0]->additionalshippingcosts;
                    $text_del2 += (int)$xml->Order[0]->orderprocessing;
                    $text_del2 += (int)$xml->Order[0]->commissionfastmoney;
                }*/
                if ($text_del2 < 350) $text_del2 = 350;
                //if ((int)$brand_id == 104) $text_del2 += 200;
            }// elseif ($city == 'Москва1' && (int)$brand_id == 104) $text_del2 = 450;
            //elseif ($city == 'Санкт-Петербург1' && (int)$brand_id == 104) $text_del2 = 450;
            //elseif ($city == 'Москва') $text_del2 = 350;
            //elseif ($city == 'Санкт-Петербург') $text_del2 = 350;
            $sql = 'SELECT name, street, house, office FROM sdec_pvz WHERE code="'. $pvz .'" LIMIT 1';
            $query = $this->db->query($sql);
            $name_pickup_pvz = '';
            if (isset($query->rows[0]['name'])) {
                $name_pickup_pvz = ' ' . $query->rows[0]['name'] .', '. $query->rows[0]['street'] .', '. $query->rows[0]['house'] .', '. $query->rows[0]['office'];
            }
            /*$products = $this->cart->getProducts();
            foreach($products as $product) {
                $sql = 'SELECT delivery_pvz_price FROM oc_product WHERE product_id="'. $product['product_id'] .'"';
                $query = $this->db->query($sql);
                if (count($query->rows) > 0) {
                    if ((int)$query->rows[0]['delivery_pvz_price'] != '') $text_del2 = $query->rows[0]['delivery_pvz_price'];
                }
            }*/
            $this->session->data['shipping_method']['title'] = 'Самовывоз из ПВЗ/СВХ' . $name_pickup_pvz;
            $this->session->data['shipping_method']['cost'] = $text_del2;
            $this->session->data['shipping_method']['tax_class_id'] = 0;
        } else {
            $this->session->data['shipping_method'] = $this->session->data['shipping_methods'][$shipping[0]]['quote'][$shipping[1]];
        }

        $payment_address = array(
                                  'country_id' => 176, // Russia
                                  'zone_id'    => 2761,   // Moscow
                                 );
        // XXX and payment_methods
        if (!empty($payment_address)) {
            // Totals
            $total_data = array();
            $total = 0;
            $taxes = $this->cart->getTaxes();

            $this->load->model('setting/extension');

            $sort_order = array();

            $results = $this->model_setting_extension->getExtensions('total');

            foreach ($results as $key => $value) {
                $sort_order[$key] = $this->config->get($value['code'] . '_sort_order');
            }

            array_multisort($sort_order, SORT_ASC, $results);

            foreach($results as $result) {
                if ($this->config->get($result['code'] . '_status')) {
                    $this->load->model('total/' . $result['code']);

                    $this->{'model_total_' . $result['code']}->getTotal($total_data, $total, $taxes);
                }
            }
            // Payment Methods
            $method_data = array();

            $this->load->model('setting/extension');

            $results = $this->model_setting_extension->getExtensions('payment');

            foreach($results as $result) {
                if ($this->config->get($result['code'] . '_status')) {
                    $this->load->model('payment/' . $result['code']);

                    $method = $this->{'model_payment_' . $result['code']}->getMethod($payment_address, $total);

                    if ($method) {
                        $method_data[$result['code']] = $method;
                    }
                }
            }

//            if ($this->session->data['shipping_method']['code'] == 'pickup.pickup' && $total < 2000) $this->session->data['shipping_method']['cost'] = 100;

            $sort_order = array();

            foreach($method_data as $key => $value) {
                $sort_order[$key] = $value['sort_order'];
            }

            array_multisort($sort_order, SORT_ASC, $method_data);

            $this->session->data['payment_methods'] = $method_data;

        }

        $this->session->data['payment_method'] = $this->session->data['payment_methods'][$payment_method_code];

        $this->session->data['guest']['customer_group_id'] = 0;
        $this->session->data['guest']['firstname']         = $firstname;
        $this->session->data['guest']['lastname']          = $lastname;
        $this->session->data['guest']['email']             = $email;
        $this->session->data['guest']['telephone']         = $phone;
        $this->session->data['guest']['fax']               = '';

        $this->session->data['guest']['price_cdek']   = $price_cdek;
        $this->session->data['guest']['pvz']          = $pvz;
        $this->session->data['guest']['pickup_pvz']   = $pickup_pvzz;
        $this->session->data['guest']['sdek_city_id'] = $sdek_city_id;
        $this->session->data['guest']['sdek_tariff']  = $tariff_type;
        $this->session->data['guest']['company_type'] = $company_type;
        $this->session->data['guest']['piter_city']   = $piter_city;
        $this->session->data['guest']['sdek_price']   = $price_cdek;

        $json['success'] = 'Данные успешно сохранены в сессию.';
        $this->response->setOutput(json_encode($json));

    }

    function printpay() {
        $legal = $_POST['legal'];
        $inn = $_POST['inn'];
        $kpp = $_POST['kpp'];
        $legal_address = $_POST['legal_address'];

        $this->session->data['seonix_printpay_legal']         = $legal;
        $this->session->data['seonix_printpay_inn']           = $inn;
        $this->session->data['seonix_printpay_kpp']           = $kpp;
        $this->session->data['seonix_printpay_legal_address'] = $legal_address;

        $json['success'] = 'Данные успешно сохранены в сессию.';
        $this->response->setOutput(json_encode($json));
    }

    private function grastin_query($link, $xml) {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_URL, $link);
        curl_setopt($curl, CURLOPT_POSTFIELDS, 'XMLPackage='.urlencode($xml));
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        $out = curl_exec($curl);
        curl_close($curl);
        $xml = simplexml_load_string($out);
        return $xml;
    }

}
