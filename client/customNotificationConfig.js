import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { View, Text } from 'react-native';

const defaultProps = {
  position: 'top',
  visibilityTime: 3000,
  autoHide: true,
  topOffset: 40,
  bottomOffset: 60
}

export const toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      {...defaultProps}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 20,
        fontWeight: '600'
      }}
      text2Style={{
        fontSize: 20,
        fontWeight: '600'
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      {...defaultProps}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
};
