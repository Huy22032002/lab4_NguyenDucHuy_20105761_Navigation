import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const App = () => {
  const bookPrice = 141.8;
  const [quantity, setQuantity] = useState(1);
  const discounts = [
    { name: 'Tiki10', discount: 0.1 },
    { name: 'Tiki20', discount: 0.2 },
    { name: 'Tiki30', discount: 0.3 },
  ];
  const [discount, setDiscount] = useState(null);
  const [isDiscountListVisible, setIsDiscountListVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(bookPrice);

  const increaseQuantity = () => {
    setQuantity((before) => before + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((i) => i - 1);
  };

  const calculatePrice = () => {
    return (quantity * bookPrice).toFixed(3) + ' đ';
  };
  const selectDiscount = (discount) => {
    setDiscount(discount);
    setIsDiscountListVisible(false);
  };
  const applyDiscount = () => {
    if(!discount)
      setTotalPrice(quantity*bookPrice);
    else if (discount.discount == 0.1){
       setTotalPrice(quantity * bookPrice * 0.9);
    } 
    else if (discount.discount == 0.2){
       setTotalPrice(quantity * bookPrice * 0.8);
    } 
    else if (discount.discount == 0.3){
       setTotalPrice(quantity * bookPrice * 0.7);
    } 
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ flex: 5, marginTop: 10 }}>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image source={require('./book.png')} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
              {' '}
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 23,
                color: 'red',
                fontWeight: 'bold',
              }}>
              {' '}
              {calculatePrice()}
            </Text>{' '}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={increaseQuantity}
                style={[styles.btn, {}]}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  +
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5 }}>
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={decreaseQuantity}
                style={[styles.btn, {}]}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  -
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', marginRight: 20 }}>
            Mã giảm giá đã lưu
          </Text>
          <TouchableOpacity onPress={() => setIsDiscountListVisible(true)}>
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>
              Xem tại đây
            </Text>
          </TouchableOpacity>
        </View>

        {isDiscountListVisible && (
          <FlatList
            data={discounts}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.discountItem}
                onPress={() => selectDiscount(item)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            style={styles.discountList}
          />
        )}
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: 200,
              height: 50,
              justifyContent: 'center',
            }}>
            {discount && (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {discount.name}
              </Text>
            )}
          </View>
          <TouchableOpacity
            onPress={applyDiscount}
            style={{
              marginLeft: 10,
              width: 100,
              height: 40,
              backgroundColor: 'green',
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              padding: 10,
              borderRadius: 15,
            }}>
            áp dụng
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text>bạn có phiếu giảm giá khác?</Text>
        <Text style={{ color: 'red', marginLeft: 20 }}>Nhập tại đây </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Tạm tính</Text>
        <Text
          style={{
            color: 'red',
            marginLeft: 10,
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          {totalPrice.toFixed(3)} đ
        </Text>
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{color:'gray', fontSize:30}}>Thành tiền</Text>
          <Text style={{ marginLeft: 10, fontSize:30, fontWeight:'bold',color:'red' }}>{totalPrice.toFixed(3)} đ</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 350,
            height: 60,
            backgroundColor: 'orange',
            textAlign: 'center',
            padding: 15,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            borderRadius: 20,
            marginTop:20
          }}>
          tiến hành đặt hàng
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'grey',
    padding: 5,
    width: 20,
    height: 28,
  },
  discountList: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '90%',
  },
  discountItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
  },
});
export default App;
