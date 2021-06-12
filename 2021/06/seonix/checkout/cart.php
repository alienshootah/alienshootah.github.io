<?php 
class ControllerCheckoutCart extends Controller {
    private $error = array();

    public function index() {
        $this->language->load('checkout/cart');

        if ((isset($_SERVER['HTTPS']) && (($_SERVER['HTTPS'] == 'on') || ($_SERVER['HTTPS'] == '1'))) || ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) {
            $connection = 'SSL';
        } else {
            $connection = 'NONSSL';
        }

        if (!isset($this->session->data['vouchers'])) {
            $this->session->data['vouchers'] = array();
        }

        // Update
        if (!empty($this->request->post['quantity'])) {
            foreach($this->request->post['quantity'] as $key => $value) {
                $this->cart->update($key, $value);
            }

            $this->session->data['company_type'] = $this->request->post['company_type'];

            unset($this->session->data['shipping_method']);
            unset($this->session->data['shipping_methods']);
            unset($this->session->data['payment_method']);
            unset($this->session->data['payment_methods']);
            unset($this->session->data['reward']);

            $this->redirect($this->url->link('checkout/cart', '', $connection));
        }

        // Remove
        if (isset($this->request->get['remove'])) {
            $this->cart->remove($this->request->get['remove']);
            unset($this->session->data['vouchers'][$this->request->get['remove']]);
            $this->session->data['success'] = $this->language->get('text_remove');
            unset($this->session->data['shipping_method']);
            unset($this->session->data['shipping_methods']);
            unset($this->session->data['payment_method']);
            unset($this->session->data['payment_methods']);
            unset($this->session->data['reward']);

            $this->redirect($this->url->link('checkout/cart', '', $connection));
        }

        // Coupon
        if (isset($this->request->post['coupon']) && $this->validateCoupon()) {
            $this->session->data['coupon'] = $this->request->post['coupon'];
            $this->session->data['success'] = $this->language->get('text_coupon');
            $this->redirect($this->url->link('checkout/cart', '', $connection));
        }

        // Voucher
        if (isset($this->request->post['voucher']) && $this->validateVoucher()) {
            $this->session->data['voucher'] = $this->request->post['voucher'];
            $this->session->data['success'] = $this->language->get('text_voucher');
            $this->redirect($this->url->link('checkout/cart', '', $connection));
        }

        // Reward
        if (isset($this->request->post['reward']) && $this->validateReward()) {
            $this->session->data['reward'] = abs($this->request->post['reward']);
            $this->session->data['success'] = $this->language->get('text_reward');
            $this->redirect($this->url->link('checkout/cart', '', $connection));
        }

        // Shipping
        if (isset($this->request->post['shipping_method']) && $this->validateShipping()) {
            $shipping = explode('.', $this->request->post['shipping_method']);
            $this->session->data['shipping_method'] = $this->session->data['shipping_methods'][$shipping[0]]['quote'][$shipping[1]];
            $this->session->data['success'] = $this->language->get('text_shipping');
            $this->redirect($this->url->link('checkout/cart', '', $connection));
        }

        $this->document->setTitle($this->language->get('heading_title'));
        $this->document->addScript('catalog/view/javascript/jquery/colorbox/jquery.colorbox-min.js');
        $this->document->addStyle('catalog/view/javascript/jquery/colorbox/colorbox.css');

        $this->data['breadcrumbs'] = array();

        $this->data['breadcrumbs'][] = array(
            'href'      => '',//$this->url->link('common/home', '', $connection),
            'text'      => $this->language->get('text_home'),
            'separator' => false
          );

          $this->data['breadcrumbs'][] = array(
            'href'      => '/basket',//$this->url->link('checkout/cart', '', $connection),
            'text'      => $this->language->get('heading_title'),
            'separator' => $this->language->get('text_separator')
          );

        if ($this->cart->hasProducts() || !empty($this->session->data['vouchers'])) {
            $points = $this->customer->getRewardPoints();
            $points_total = 0;
            foreach($this->cart->getProducts() as $product) {
                if ($product['points']) {
                    $points_total += $product['points'];
                }
            }

            $this->data['heading_title'] = $this->language->get('heading_title');

            $this->data['text_next'] = $this->language->get('text_next');
            $this->data['text_next_choice'] = $this->language->get('text_next_choice');
             $this->data['text_use_coupon'] = $this->language->get('text_use_coupon');
            $this->data['text_use_voucher'] = $this->language->get('text_use_voucher');
            $this->data['text_use_reward'] = sprintf($this->language->get('text_use_reward'), $points);
            $this->data['text_shipping_estimate'] = $this->language->get('text_shipping_estimate');
            $this->data['text_shipping_detail'] = $this->language->get('text_shipping_detail');
            $this->data['text_shipping_method'] = $this->language->get('text_shipping_method');
            $this->data['text_select'] = $this->language->get('text_select');
            $this->data['text_none'] = $this->language->get('text_none');

            $this->data['column_image'] = $this->language->get('column_image');
            $this->data['column_name'] = $this->language->get('column_name');
            $this->data['column_model'] = $this->language->get('column_model');
            $this->data['column_quantity'] = $this->language->get('column_quantity');
            $this->data['column_price'] = $this->language->get('column_price');
            $this->data['column_total'] = $this->language->get('column_total');

            $this->data['entry_coupon'] = $this->language->get('entry_coupon');
            $this->data['entry_voucher'] = $this->language->get('entry_voucher');
            $this->data['entry_reward'] = sprintf($this->language->get('entry_reward'), $points_total);
            $this->data['entry_country'] = $this->language->get('entry_country');
            $this->data['entry_zone'] = $this->language->get('entry_zone');
            $this->data['entry_postcode'] = $this->language->get('entry_postcode');

            $this->data['button_update'] = $this->language->get('button_update');
            $this->data['button_remove'] = $this->language->get('button_remove');
            $this->data['button_coupon'] = $this->language->get('button_coupon');
            $this->data['button_voucher'] = $this->language->get('button_voucher');
            $this->data['button_reward'] = $this->language->get('button_reward');
            $this->data['button_quote'] = $this->language->get('button_quote');
            $this->data['button_shipping'] = $this->language->get('button_shipping');
            $this->data['button_shopping'] = $this->language->get('button_shopping');
            $this->data['button_checkout'] = $this->language->get('button_checkout');

            if (isset($this->error['warning'])) {
                $this->data['error_warning'] = $this->error['warning'];
            } elseif (!$this->cart->hasStock() && (!$this->config->get('config_stock_checkout') || $this->config->get('config_stock_warning'))) {
                  $this->data['error_warning'] = $this->language->get('error_stock');
            } else {
                $this->data['error_warning'] = '';
            }

            if ($this->config->get('config_customer_price') && !$this->customer->isLogged()) {
                $this->data['attention'] = sprintf($this->language->get('text_login'), $this->url->link('account/login', '', $connection), $this->url->link('account/register', '', $connection));
            } else {
                $this->data['attention'] = '';
            }

            if (isset($this->session->data['success'])) {
                $this->data['success'] = $this->session->data['success'];
                unset($this->session->data['success']);
            } else {
                $this->data['success'] = '';
            }

            $this->data['action'] = $this->url->link('checkout/cart', '', $connection);

            if ($this->config->get('config_cart_weight')) {
                $this->data['weight'] = $this->weight->format($this->cart->getWeight(), $this->config->get('config_weight_class_id'), $this->language->get('decimal_point'), $this->language->get('thousand_point'));
            } else {
                $this->data['weight'] = '';
            }

            $this->load->model('tool/image');

            $this->data['products'] = array();

            $products = $this->cart->getProducts();

            $sakura_products = false;
            $sakura_cids = array(1491, 1500, 1495, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345);
            $delivery_1200 = array(926, 1489, 1491, 1490, 1493, 1496, 1494, 206, 1495, 1166, 1494, 1497, 1169, 1473, 1498, 1500, 1499);
            $pcategory_id = $pbrand_id = $price_order = $price_min_order = 0;
            $term_delivery = $delivery_express_price = $delivery_courier_price = $delivery_pvz_price = $delivery_pek_price = $delivery_not_size_price = '';

            foreach($products as $product) {

                $sql = 'SELECT category_id FROM oc_product_to_category WHERE product_id="'. $product['product_id'] .'" AND main_category="1"';
                $query = $this->db->query($sql);
                if (count($query->rows) > 0) {
                    if (in_array($query->rows[0]['category_id'], $sakura_cids)) $sakura_products = true;
                    if (in_array($query->rows[0]['category_id'], $delivery_1200)) $pcategory_id = $query->rows[0]['category_id'];
                }

                $sql = 'SELECT manufacturer_id, price_order, price_min_order, price, term_delivery, delivery_express_price, delivery_courier_price, delivery_pvz_price, delivery_pek_price, delivery_not_size_price FROM oc_product WHERE product_id="'. $product['product_id'] .'"';
                $query = $this->db->query($sql);
                if (count($query->rows) > 0) {
                    if ((int)$query->rows[0]['manufacturer_id'] == 11) $pbrand_id = 11;
                    elseif ((int)$query->rows[0]['manufacturer_id'] == 13) $pbrand_id = 13;
                    elseif ((int)$query->rows[0]['manufacturer_id'] == 104) $pbrand_id = 104;
                    if ((int)$query->rows[0]['manufacturer_id'] == 34) $pbrand_id = 34;
                    if ((int)$query->rows[0]['price_order'] == 1) $price_order = 1;
                    if ((int)$query->rows[0]['price_min_order'] > $price_min_order && (int)$query->rows[0]['price_min_order'] > (int)$query->rows[0]['price']) $price_min_order = (int)$query->rows[0]['price_min_order'];

                    if ($query->rows[0]['term_delivery'] != '') $term_delivery = $query->rows[0]['term_delivery'];
                    if ($query->rows[0]['delivery_express_price'] != '') $delivery_express_price = $query->rows[0]['delivery_express_price'];
                    if ($query->rows[0]['delivery_courier_price'] != '') $delivery_courier_price = $query->rows[0]['delivery_courier_price'];
                    if ($query->rows[0]['delivery_pvz_price'] != '') $delivery_pvz_price = $query->rows[0]['delivery_pvz_price'];
                    if ($query->rows[0]['delivery_pek_price'] != '') $delivery_pek_price = $query->rows[0]['delivery_pek_price'];
                    if ($query->rows[0]['delivery_not_size_price'] != '') $delivery_not_size_price = $query->rows[0]['delivery_not_size_price'];
                }

                $product_total = 0;
                foreach($products as $product_2) {
                    if ($product_2['product_id'] == $product['product_id']) {
                        $product_total += $product_2['quantity'];
                    }
                }

                if ($product['minimum'] > $product_total) {
                    $this->data['error_warning'] = sprintf($this->language->get('error_minimum'), $product['name'], $product['minimum']);
                }

                if ($product['image']) {
                    $image = $this->model_tool_image->resize($product['image'], $this->config->get('config_image_cart_width'), $this->config->get('config_image_cart_height'));
                } else {
                    $image = '';
                }

                $option_data = array();

                foreach($product['option'] as $option) {
                    if ($option['type'] != 'file') {
                        $value = $option['option_value'];
                    } else {
                        $filename = $this->encryption->decrypt($option['option_value']);
                        $value = utf8_substr($filename, 0, utf8_strrpos($filename, '.'));
                    }

                    $option_data[] = array(
                        'name'  => $option['name'],
                        'value' => (utf8_strlen($value) > 20 ? utf8_substr($value, 0, 20) . '..' : $value)
                    );
                }

                $company_type = $this->session->data['company_type'];
                if ($product['quantity'] >= 5 && ($product['price_card'] * $product['quantity']) > 3000) $price_g = $product['price_card'];
                else $price_g = $product['price'];

                // Display prices
                if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
                    $price = $this->currency->format($this->tax->calculate($price_g, $product['tax_class_id'], $this->config->get('config_tax')));
                } else {
                    $price = false;
                }

                // Display prices
                if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
                    $total = $this->currency->format($this->tax->calculate($price_g, $product['tax_class_id'], $this->config->get('config_tax')) * $product['quantity']);
                } else {
                    $total = false;
                }

                $cl_type = $this->session->data['client_type_'.$product['product_id']];
                if ($cl_type == 'vip') {
                    $cl_type_name = "Данная цена доступна после согласования оптовой заявки с собственником проекта: opt.citycard@gmail.com "; 
                } elseif ($cl_type == 'card') {
                    $cl_type_name = "";
                } elseif ($cl_type == 'nal') {
                    $cl_type_name = "";
                } else $cl_type_name = '';

                $articul = $product['location'];
                $articul = str_replace('VTT_', '', $articul);
                $articul = str_replace('NETLAB_', '', $articul);

                $this->data['products'][] = array(
                    'product_id'    => $product['product_id'],
                    'key'           => $product['key'],
                    'thumb'         => $image,
                    'name'          => $product['name'],
                    'model'         => $product['model'],
                    'cl_type_name'  => $cl_type_name,
                    'option'        => $option_data,
                    'quantity'      => $product['quantity'],
                    'stock'         => $product['stock'] ? true : !(!$this->config->get('config_stock_checkout') || $this->config->get('config_stock_warning')),
                    'reward'        => ($product['reward'] ? sprintf($this->language->get('text_points'), $product['reward']) : ''),
                    'price'         => $price,
                    'total'         => $total,
                    'href'          => $this->url->link('product/product', 'product_id=' . $product['product_id'], $connection),
                    'remove'        => $this->url->link('checkout/cart', 'remove=' . $product['key'], $connection),
                    'location'      => $articul,
                );
            }

            // Gift Voucher
            $this->data['vouchers'] = array();
            if (!empty($this->session->data['vouchers'])) {
                foreach($this->session->data['vouchers'] as $key => $voucher) {
                    $this->data['vouchers'][] = array(
                        'key'         => $key,
                        'description' => $voucher['description'],
                        'amount'      => $this->currency->format($voucher['amount']),
                        'remove'      => $this->url->link('checkout/cart', 'remove=' . $key, $connection)
                    );
                }
            }

            if (isset($this->request->post['next'])) {
                $this->data['next'] = $this->request->post['next'];
            } else {
                $this->data['next'] = '';
            }

            $this->data['coupon_status'] = $this->config->get('coupon_status');

            if (isset($this->request->post['coupon'])) {
                $this->data['coupon'] = $this->request->post['coupon'];
            } elseif (isset($this->session->data['coupon'])) {
                $this->data['coupon'] = $this->session->data['coupon'];
            } else {
                $this->data['coupon'] = '';
            }

            $this->data['voucher_status'] = $this->config->get('voucher_status');

            if (isset($this->request->post['voucher'])) {
                $this->data['voucher'] = $this->request->post['voucher'];
            } elseif (isset($this->session->data['voucher'])) {
                $this->data['voucher'] = $this->session->data['voucher'];
            } else {
                $this->data['voucher'] = '';
            }

            $this->data['reward_status'] = ($points && $points_total && $this->config->get('reward_status'));

            if (isset($this->request->post['reward'])) {
                $this->data['reward'] = $this->request->post['reward'];
            } elseif (isset($this->session->data['reward'])) {
                $this->data['reward'] = $this->session->data['reward'];
            } else {
                $this->data['reward'] = '';
            }

            $this->data['shipping_status'] = $this->config->get('shipping_status') && $this->config->get('shipping_estimator') && $this->cart->hasShipping();

            if (isset($this->request->post['country_id'])) {
                $this->data['country_id'] = $this->request->post['country_id'];
            } elseif (isset($this->session->data['shipping_country_id'])) {
                $this->data['country_id'] = $this->session->data['shipping_country_id'];
            } else {
                $this->data['country_id'] = $this->config->get('config_country_id');
            }

            $this->load->model('localisation/country');

            $this->data['countries'] = $this->model_localisation_country->getCountries();

            if (isset($this->request->post['zone_id'])) {
                $this->data['zone_id'] = $this->request->post['zone_id'];
            } elseif (isset($this->session->data['shipping_zone_id'])) {
                $this->data['zone_id'] = $this->session->data['shipping_zone_id'];
            } else {
                $this->data['zone_id'] = '';
            }

            if (isset($this->request->post['postcode'])) {
                $this->data['postcode'] = $this->request->post['postcode'];
            } elseif (isset($this->session->data['shipping_postcode'])) {
                $this->data['postcode'] = $this->session->data['shipping_postcode'];
            } else {
                $this->data['postcode'] = '';
            }

            if (isset($this->request->post['shipping_method'])) {
                $this->data['shipping_method'] = $this->request->post['shipping_method'];
            } elseif (isset($this->session->data['shipping_method'])) {
                $this->data['shipping_method'] = $this->session->data['shipping_method']['code'];
            } else {
                $this->data['shipping_method'] = '';
            }

            // Totals
            $this->load->model('setting/extension');

            $total_data = array();
            $total = 0;
            $taxes = $this->cart->getTaxes();

            // Display prices
            if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
                $sort_order = array();
                $results = $this->model_setting_extension->getExtensions('total');
                foreach($results as $key => $value) {
                    $sort_order[$key] = $this->config->get($value['code'] . '_sort_order');
                }
                array_multisort($sort_order, SORT_ASC, $results);

                foreach($results as $result) {
                    if ($this->config->get($result['code'] . '_status')) {
                        $this->load->model('total/' . $result['code']);

                        $this->{'model_total_' . $result['code']}->getTotal($total_data, $total, $taxes);
                    }

                    $sort_order = array();

                    foreach($total_data as $key => $value) {
                        $sort_order[$key] = $value['sort_order'];
                    }

                    array_multisort($sort_order, SORT_ASC, $total_data);
                }
            }

            $this->data['company_type1'] = $this->data['company_type2'] = $this->data['company_type3'] = '';
            if ($this->session->data['company_type'] == 'individual') {
                $this->data['company_type2'] = 'checked';
            } elseif ($this->session->data['company_type'] == 'entrepreneur') {
                $this->data['company_type3'] = 'checked';
            } elseif ($this->session->data['company_type'] == 'legal') {
                $this->data['company_type1'] = 'checked';
            } else {
                $this->data['company_type2'] = 'checked';
                $this->session->data['company_type'] = 'individual';
            }
            $this->data['company_type'] = $this->session->data['company_type'];

            $this->data['totals'] = $total_data;

            $this->data['sakura_products'] = $sakura_products;
            $this->data['pcategory_id'] = $pcategory_id;
            $this->data['pbrand_id'] = $pbrand_id;
            $this->data['price_order'] = $price_order;
            $this->data['price_min_order'] = $price_min_order;

            $this->data['term_delivery'] = $term_delivery;
            $this->data['delivery_express_price'] = $delivery_express_price;
            $this->data['delivery_courier_price'] = $delivery_courier_price;
            $this->data['delivery_pvz_price'] = $delivery_pvz_price;
            $this->data['delivery_pek_price'] = $delivery_pek_price;
            $this->data['delivery_not_size_price'] = $delivery_not_size_price;

            $this->data['continue'] = $this->url->link('common/home', '', $connection);
            $this->data['checkout'] = $this->url->link('checkout/checkout', '', 'SSL');

            if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/checkout/cart.tpl')) {
                $this->template = $this->config->get('config_template') . '/template/checkout/cart.tpl';
            } else {
                $this->template = 'default/template/checkout/cart.tpl';
            }
            $this->data['client_type'] = $this->session->data['client_type'];
            $this->children = array(
                'common/column_left',
                'common/column_right',
                'common/content_bottom',
                'common/content_top',
                'common/footer',
                'common/header'
            );

            $this->response->setOutput($this->render());
        } else {
            $this->data['heading_title'] = $this->language->get('heading_title');
            $this->data['text_error'] = $this->language->get('text_empty');
            $this->data['button_continue'] = $this->language->get('button_continue');
            $this->data['continue'] = $this->url->link('common/home', '', $connection);

            unset($this->session->data['success']);

            if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/error/not_found.tpl')) {
                $this->template = $this->config->get('config_template') . '/template/error/not_found.tpl';
            } else {
                $this->template = 'default/template/error/not_found.tpl';
            }

            $this->children = array(
                'common/column_left',
                'common/column_right',
                'common/content_top',
                'common/content_bottom',
                'common/footer',
                'common/header'
            );

            $this->response->setOutput($this->render());
        }
      }

    protected function validateCoupon() {
        $this->load->model('checkout/coupon');

        $coupon_info = $this->model_checkout_coupon->getCoupon($this->request->post['coupon']);

        if (!$coupon_info) {
            $this->error['warning'] = $this->language->get('error_coupon');
        }

        if (!$this->error) {
            return true;
        } else {
            return false;
        }
    }

    protected function validateVoucher() {
        $this->load->model('checkout/voucher');

        $voucher_info = $this->model_checkout_voucher->getVoucher($this->request->post['voucher']);

        if (!$voucher_info) {
            $this->error['warning'] = $this->language->get('error_voucher');
        }

        if (!$this->error) {
            return true;
        } else {
            return false;
        }
    }

    protected function validateReward() {
        $points = $this->customer->getRewardPoints();

        $points_total = 0;

        foreach ($this->cart->getProducts() as $product) {
            if ($product['points']) {
                $points_total += $product['points'];
            }
        }

        if (empty($this->request->post['reward'])) {
            $this->error['warning'] = $this->language->get('error_reward');
        }

        if ($this->request->post['reward'] > $points) {
            $this->error['warning'] = sprintf($this->language->get('error_points'), $this->request->post['reward']);
        }

        if ($this->request->post['reward'] > $points_total) {
            $this->error['warning'] = sprintf($this->language->get('error_maximum'), $points_total);
        }

        if (!$this->error) {
            return true;
        } else {
            return false;
        }
    }

    protected function validateShipping() {
        if (!empty($this->request->post['shipping_method'])) {
            $shipping = explode('.', $this->request->post['shipping_method']);

            if (!isset($shipping[0]) || !isset($shipping[1]) || !isset($this->session->data['shipping_methods'][$shipping[0]]['quote'][$shipping[1]])) {
                $this->error['warning'] = $this->language->get('error_shipping');
            }
        } else {
            $this->error['warning'] = $this->language->get('error_shipping');
        }

        if (!$this->error) {
            return true;
        } else {
            return false;
        }
    }

    public function add() {

        if ((isset($_SERVER['HTTPS']) && (($_SERVER['HTTPS'] == 'on') || ($_SERVER['HTTPS'] == '1'))) || ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) {
            $connection = 'SSL';
        } else {
            $connection = 'NONSSL';
        }

        $this->language->load('checkout/cart');

        $json = array();

        if (isset($this->request->post['product_id'])) {
            $product_id = $this->request->post['product_id'];
        } else {
            $product_id = 0;
        }

        if (isset($this->request->post['client_type'])) {
            $client_type = $this->request->post['client_type'];
            $this->session->data['client_type']=$client_type;
            $this->session->data['client_type_'.$product_id]=$client_type;
        } else {
            $client_type = '';
        }

        $this->load->model('catalog/product');
        $product_info = $this->model_catalog_product->getProduct($product_id);

        if ($product_info) {
            if (isset($this->request->post['quantity'])) {
                $quantity = $this->request->post['quantity'];
            } else {
                $quantity = 1;
            }

            if (isset($this->request->post['option'])) {
                $option = array_filter($this->request->post['option']);
            } else {
                $option = array();
            }

            $product_options = $this->model_catalog_product->getProductOptions($this->request->post['product_id']);

            foreach($product_options as $product_option) {
                if ($product_option['required'] && empty($option[$product_option['product_option_id']])) {
                    $json['error']['option'][$product_option['product_option_id']] = sprintf($this->language->get('error_required'), $product_option['name']);
                }
            }

            if (!$json) {
                $this->cart->add($this->request->post['product_id'], $quantity, $option);

                //$json['success'] = sprintf($this->language->get('text_success'), $this->url->link('product/product', 'product_id=' . $this->request->post['product_id'], '', $connection), $product_info['name'], $this->url->link('checkout/cart', '', $connection));
                $json['success'] = sprintf($this->language->get('text_success'), '/basket', $product_info['name'], '/basket');

                unset($this->session->data['shipping_method']);
                unset($this->session->data['shipping_methods']);
                unset($this->session->data['payment_method']);
                unset($this->session->data['payment_methods']);

                // Totals
                $this->load->model('setting/extension');

                $total_data = array();
                $total = 0;
                $taxes = $this->cart->getTaxes();

                // Display prices
                if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
                    $sort_order = array();

                    $results = $this->model_setting_extension->getExtensions('total');

                    foreach($results as $key => $value) {
                        $sort_order[$key] = $this->config->get($value['code'] . '_sort_order');
                    }

                    array_multisort($sort_order, SORT_ASC, $results);

                    foreach($results as $result) {
                        if ($this->config->get($result['code'] . '_status')) {
                            $this->load->model('total/' . $result['code']);
                            $this->{'model_total_' . $result['code']}->getTotal($total_data, $total, $taxes);
                        }

                        $sort_order = array();

                        foreach($total_data as $key => $value) {
                            $sort_order[$key] = $value['sort_order'];
                        }

                        array_multisort($sort_order, SORT_ASC, $total_data);
                    }
                }

                //$json['total'] = sprintf($this->language->get('text_items'), $this->cart->countProducts() + (isset($this->session->data['vouchers']) ? count($this->session->data['vouchers']) : 0), $this->currency->format($total));

                $json['total'] = $this->plural_tool($this->cart->countProducts() + (isset($this->session->data['vouchers']) ? count($this->session->data['vouchers']) : 0), $this->currency->format($total), array('','',''));
                $json['sum_basket'] = $this->currency->format($total);
            } else {
                $json['redirect'] = str_replace('&amp;', '&', $this->url->link('product/product', 'product_id=' . $this->request->post['product_id'], $connection));
            }
        }

        $this->response->setOutput(json_encode($json));
    }

    public function quote() {
        if ((isset($_SERVER['HTTPS']) && (($_SERVER['HTTPS'] == 'on') || ($_SERVER['HTTPS'] == '1'))) || ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) {
            $connection = 'SSL';
        } else {
            $connection = 'NONSSL';
        }
        $this->language->load('checkout/cart');

        $json = array();

        if (!$this->cart->hasProducts()) {
            $json['error']['warning'] = $this->language->get('error_product');
        }

        if (!$this->cart->hasShipping()) {
            $json['error']['warning'] = sprintf($this->language->get('error_no_shipping'), $this->url->link('information/contact', '', $connection));
        }

        if ($this->request->post['country_id'] == '') {
            $json['error']['country'] = $this->language->get('error_country');
        }

        if (!isset($this->request->post['zone_id']) || $this->request->post['zone_id'] == '') {
            $json['error']['zone'] = $this->language->get('error_zone');
        }

        $this->load->model('localisation/country');
        $country_info = $this->model_localisation_country->getCountry($this->request->post['country_id']);

        if ($country_info && $country_info['postcode_required'] && (utf8_strlen($this->request->post['postcode']) < 2) || (utf8_strlen($this->request->post['postcode']) > 10)) {
            $json['error']['postcode'] = $this->language->get('error_postcode');
        }

        if (!$json) {
            $this->tax->setShippingAddress($this->request->post['country_id'], $this->request->post['zone_id']);

            // Default Shipping Address
            $this->session->data['shipping_country_id'] = $this->request->post['country_id'];
            $this->session->data['shipping_zone_id'] = $this->request->post['zone_id'];
            $this->session->data['shipping_postcode'] = $this->request->post['postcode'];

            if ($country_info) {
                $country = $country_info['name'];
                $iso_code_2 = $country_info['iso_code_2'];
                $iso_code_3 = $country_info['iso_code_3'];
                $address_format = $country_info['address_format'];
            } else {
                $country = '';
                $iso_code_2 = '';
                $iso_code_3 = '';
                $address_format = '';
            }

            $this->load->model('localisation/zone');

            $zone_info = $this->model_localisation_zone->getZone($this->request->post['zone_id']);

            if ($zone_info) {
                $zone = $zone_info['name'];
                $zone_code = $zone_info['code'];
            } else {
                $zone = '';
                $zone_code = '';
            }

            $address_data = array(
                'firstname'      => '',
                'lastname'       => '',
                'company'        => '',
                'address_1'      => '',
                'address_2'      => '',
                'postcode'       => $this->request->post['postcode'],
                'city'           => '',
                'zone_id'        => $this->request->post['zone_id'],
                'zone'           => $zone,
                'zone_code'      => $zone_code,
                'country_id'     => $this->request->post['country_id'],
                'country'        => $country,
                'iso_code_2'     => $iso_code_2,
                'iso_code_3'     => $iso_code_3,
                'address_format' => $address_format
            );

            $quote_data = array();

            $this->load->model('setting/extension');

            $results = $this->model_setting_extension->getExtensions('shipping');

            foreach($results as $result) {
                if ($this->config->get($result['code'] . '_status')) {
                    $this->load->model('shipping/' . $result['code']);
                    $quote = $this->{'model_shipping_' . $result['code']}->getQuote($address_data);

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

            foreach($quote_data as $key => $value) {
                $sort_order[$key] = $value['sort_order'];
            }

            array_multisort($sort_order, SORT_ASC, $quote_data);

            $this->session->data['shipping_methods'] = $quote_data;

            if ($this->session->data['shipping_methods']) {
                $json['shipping_method'] = $this->session->data['shipping_methods'];
            } else {
                $json['error']['warning'] = sprintf($this->language->get('error_no_shipping'), $this->url->link('information/contact', '', $connection));
            }
        }

        $this->response->setOutput(json_encode($json));
    }

    public function country() {
        if ((isset($_SERVER['HTTPS']) && (($_SERVER['HTTPS'] == 'on') || ($_SERVER['HTTPS'] == '1'))) || ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) {
            $connection = 'SSL';
        } else {
            $connection = 'NONSSL';
        }
        $json = array();

        $this->load->model('localisation/country');

        $country_info = $this->model_localisation_country->getCountry($this->request->get['country_id']);

        if ($country_info) {
            $this->load->model('localisation/zone');

            $json = array(
                'country_id'        => $country_info['country_id'],
                'name'              => $country_info['name'],
                'iso_code_2'        => $country_info['iso_code_2'],
                'iso_code_3'        => $country_info['iso_code_3'],
                'address_format'    => $country_info['address_format'],
                'postcode_required' => $country_info['postcode_required'],
                'zone'              => $this->model_localisation_zone->getZonesByCountryId($this->request->get['country_id']),
                'status'            => $country_info['status']
            );
        }

        $this->response->setOutput(json_encode($json));
    }

    public function price_option_change() {
        $json = array();
        $options_makeup = 0;

        if (isset($this->request->post['product_id'])) {
            $product_id = (int)$this->request->post['product_id'];
        } else {
            $product_id = 0;
        }

        if (isset($this->request->post['quantity'])) {
            $quantity = (int)$this->request->post['quantity'];
        } else {
            $quantity = 1;
        }

        $this->cart->update($product_id, $quantity);

        $this->language->load('product/product');
        $this->load->model('catalog/product');

        $products = $this->cart->getProducts();

        // Totals
        $this->load->model('setting/extension');

        $total_data = array();
        $total = 0;
        $taxes = $this->cart->getTaxes();

        //$cl_type = $this->session->data['client_type_'.$product_id];
        $company_type = $this->session->data['company_type'];

        // Display prices
        if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
            $sort_order = array();
            $results = $this->model_setting_extension->getExtensions('total');
            foreach($results as $key => $value) {
                $sort_order[$key] = $this->config->get($value['code'] . '_sort_order');
            }
            array_multisort($sort_order, SORT_ASC, $results);

            foreach($results as $result) {
                if ($this->config->get($result['code'] . '_status')) {
                    $this->load->model('total/' . $result['code']);

                    $this->{'model_total_' . $result['code']}->getTotal($total_data, $total, $taxes);
                }

                $sort_order = array();

                foreach($total_data as $key => $value) {
                    $sort_order[$key] = $value['sort_order'];
                }

                array_multisort($sort_order, SORT_ASC, $total_data);
            }

        }
        $json['new_price']['sum'] = $total_data[0]['text'];
        $json['new_price']['sum_int'] = (int)str_replace(' ', '', $total_data[0]['text']);

        $product_info = $this->model_catalog_product->getProduct($product_id);

        // Product Information
        if ($product_info) {
            if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
                if ($quantity >= 2 && (int)$product_info['price_pr5'] > 0) {
                        $price5 = $product_info['price']*5/100;
                        $data['price'] = (int)($product_info['price'] - $price5);
                } elseif ($quantity >= 5 && ($product_info['price_card'] * $quantity) > 3000) $data['price'] = $product_info['price_card'];
                else $data['price'] = $product_info['price'];
            } else {
                $data['price'] = false;
            }

            if ((float)$product_info['special']) {
                    $data['special'] = $product_info['special'];
            } else {
                $data['special'] = false;
            }

            if (isset($this->request->post['option']) && $this->request->post['option']) {
                    foreach($this->model_catalog_product->getProductOptions($product_id) as $option) {

                        if ($option['type'] == 'select' || $option['type'] == 'radio' || $option['type'] == 'checkbox' || $option['type'] == 'image') {
                            foreach($option['option_value'] as $option_value) {
                                //If options checkbox
                                if(isset($this->request->post['option'][$option['product_option_id']]) && is_array($this->request->post['option'][$option['product_option_id']])) {
                                    array_filter($this->request->post['option'][$option['product_option_id']]);
                                    foreach($this->request->post['option'][$option['product_option_id']] as $checked_option) {
                                        if ($checked_option == $option_value['product_option_value_id']) {
                                            if (!$option_value['subtract'] || ($option_value['quantity'] > 0)) {
                                                if ((($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) && (float)$option_value['price']) {
                                                    $price = $option_value['price'];
                                                } else {
                                                    $price = false;
                                                }
                                                if ($price) {
                                                    if ($option_value['price_prefix'] === '+') {
                                                        $options_makeup = $options_makeup + (float)$price;
                                                    } else {
                                                        $options_makeup = $options_makeup - (float)$price;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                //If options not checkbox
                                if (isset($this->request->post['option'][$option['product_option_id']]) && $this->request->post['option'][$option['product_option_id']] == $option_value['product_option_value_id']) {
                                    if (!$option_value['subtract'] || ($option_value['quantity'] > 0)) {
                                        if ((($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) && (float)$option_value['price']) {
                                            $price = $option_value['price'];
                                        } else {
                                            $price = false;
                                        }
                                        if ($price) {
                                            if ($option_value['price_prefix'] === '+') {
                                                $options_makeup = $options_makeup + (float)$price;
                                            } else {
                                                $options_makeup = $options_makeup - (float)$price;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        unset($price);
                    }
            }

            /*if ($data['price']) {
                $json['new_price']['price'] = $this->currency->format($this->tax->calculate((($data['price'] + $options_makeup) * $quantity ), $product_info['tax_class_id'], $this->config->get('config_tax')));
            } else {
                $json['new_price']['price'] = false;
            }*/
            if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
                $json['new_price']['price'] = $this->currency->format($this->tax->calculate($data['price'], $product_info['tax_class_id'], $this->config->get('config_tax')));
                $json['new_price']['total'] = $this->currency->format($this->tax->calculate($data['price'], $product_info['tax_class_id'], $this->config->get('config_tax')) * $quantity);
            } else {
                $json['new_price']['price'] = false;
                $json['new_price']['total'] = false;
            }

            if ($data['special']) {
                $json['new_price']['special'] = $this->currency->format($this->tax->calculate((($data['special'] + $options_makeup ) * $quantity), $product_info['tax_class_id'], $this->config->get('config_tax')));
            } else {
                $json['new_price']['special'] = false;
            }

            if ($this->config->get('config_tax')) {
                $json['new_price']['tax'] = $this->currency->format(((float)$product_info['special'] ? ($product_info['special'] + $options_makeup): ($product_info['price'] + $options_makeup))  );
            } else {
                $json['new_price']['tax'] = false;
            }

            $json['success'] = true;
        } else {
            $json['success'] = false;
        }

        echo json_encode($json);
        exit;
    }

    public function product_remove() {
        $json = array();

        if (isset($this->request->post['product_id'])) {
            $product_id = (int)$this->request->post['product_id'];
        } else {
            $product_id = 0;
        }

        $this->cart->remove($product_id);

        $this->language->load('product/product');
        $this->load->model('catalog/product');

        $products = $this->cart->getProducts();

        // Totals
        $this->load->model('setting/extension');

        $total_data = array();
        $total = 0;
        $taxes = $this->cart->getTaxes();

        // Display prices
        if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
            $sort_order = array();
            $results = $this->model_setting_extension->getExtensions('total');
            foreach($results as $key => $value) {
                $sort_order[$key] = $this->config->get($value['code'] . '_sort_order');
            }
            array_multisort($sort_order, SORT_ASC, $results);

            foreach($results as $result) {
                if ($this->config->get($result['code'] . '_status')) {
                    $this->load->model('total/' . $result['code']);

                    $this->{'model_total_' . $result['code']}->getTotal($total_data, $total, $taxes);
                }

                $sort_order = array();

                foreach($total_data as $key => $value) {
                    $sort_order[$key] = $value['sort_order'];
                }

                array_multisort($sort_order, SORT_ASC, $total_data);
            }

        }
        $json['new_price']['sum_int'] = (int)str_replace(' ', '', $total_data[0]['text']);

        $product_info = $this->model_catalog_product->getProduct($product_id);

        // Product Information
        if ($product_info) {
            if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
                $data['price'] = $product_info['price'];
            } else {
                $data['price'] = false;
            }

            if ((float)$product_info['special']) {
                    $data['special'] = $product_info['special'];
            } else {
                $data['special'] = false;
            }

            if (isset($this->request->post['option']) && $this->request->post['option']) {
                    foreach($this->model_catalog_product->getProductOptions($product_id) as $option) {

                        if ($option['type'] == 'select' || $option['type'] == 'radio' || $option['type'] == 'checkbox' || $option['type'] == 'image') {
                            foreach($option['option_value'] as $option_value) {
                                //If options checkbox
                                if(isset($this->request->post['option'][$option['product_option_id']]) && is_array($this->request->post['option'][$option['product_option_id']])) {
                                    array_filter($this->request->post['option'][$option['product_option_id']]);
                                    foreach($this->request->post['option'][$option['product_option_id']] as $checked_option) {
                                        if ($checked_option == $option_value['product_option_value_id']) {
                                            if (!$option_value['subtract'] || ($option_value['quantity'] > 0)) {
                                                if ((($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) && (float)$option_value['price']) {
                                                    $price = $option_value['price'];
                                                } else {
                                                    $price = false;
                                                }
                                                if ($price) {
                                                    if ($option_value['price_prefix'] === '+') {
                                                        $options_makeup = $options_makeup + (float)$price;
                                                    } else {
                                                        $options_makeup = $options_makeup - (float)$price;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                //If options not checkbox
                                if (isset($this->request->post['option'][$option['product_option_id']]) && $this->request->post['option'][$option['product_option_id']] == $option_value['product_option_value_id']) {
                                    if (!$option_value['subtract'] || ($option_value['quantity'] > 0)) {
                                        if ((($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) && (float)$option_value['price']) {
                                            $price = $option_value['price'];
                                        } else {
                                            $price = false;
                                        }
                                        if ($price) {
                                            if ($option_value['price_prefix'] === '+') {
                                                $options_makeup = $options_makeup + (float)$price;
                                            } else {
                                                $options_makeup = $options_makeup - (float)$price;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        unset($price);
                    }
            }

            if ($data['price']) {
                $json['new_price']['price'] = $this->currency->format($this->tax->calculate((($data['price'] + $options_makeup) * $quantity ), $product_info['tax_class_id'], $this->config->get('config_tax')));
            } else {
                $json['new_price']['price'] = false;
            }

            if ($data['special']) {
                $json['new_price']['special'] = $this->currency->format($this->tax->calculate((($data['special'] + $options_makeup ) * $quantity), $product_info['tax_class_id'], $this->config->get('config_tax')));
            } else {
                $json['new_price']['special'] = false;
            }

            if ($this->config->get('config_tax')) {
                $json['new_price']['tax'] = $this->currency->format(((float)$product_info['special'] ? ($product_info['special'] + $options_makeup): ($product_info['price'] + $options_makeup))  );
            } else {
                $json['new_price']['tax'] = false;
            }

            $price = (int)str_replace(' ', '', $json['new_price']['price']);
            $sum = $json['new_price']['sum_int'] - $price;
            $json['new_price']['sum'] = $this->currency->format($this->tax->calculate($sum, $product_info['tax_class_id'], $this->config->get('config_tax')));

            $json['success'] = true;

        } else {
            $json['success'] = false;
        }

        echo json_encode($json);
        exit;
    }

    public function company_type() {
        $json = array();

        if (isset($this->request->post['company_type'])) {
            $company_type = $this->request->post['company_type'];
        } else {
            $company_type = 'individual';
        }
        $this->session->data['company_type'] = $company_type;
        $json['success'] = true;
        echo json_encode($json);
        exit;
    }

}
?>
