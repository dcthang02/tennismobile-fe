import React, { useState } from "react";
import { Alert, PermissionsAndroid } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { DocumentPickerResult } from "expo-document-picker";

const useUploadImage = () => {
  const [singleFile, setSingleFile] = useState<DocumentPickerResult | null>(
    null
  );

  const checkPermissions = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );

      if (!result) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title:
              "You need to give storage permission to download and save the file",
            message: "App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera");
          return true;
        } else {
          Alert.alert("Error", "");

          console.log("Camera permission denied");
          return false;
        }
      } else {
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  function resetFile() {
    setSingleFile(null);
  }

  async function selectFile() {
    try {
      const result = await checkPermissions();

      if (result) {
        const result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: false,
          type: "image/*",
        });

        if (result.assets) {
          // Printing the log realted to the file
          console.log("res : " + JSON.stringify(result));
          // Setting the state to show single file attributes
          setSingleFile(result);
        }
      }
    } catch (err) {
      setSingleFile(null);
      console.warn(err);
      return false;
    }
  }

  return {
    singleFile,
    selectFile,
    resetFile,
  };
};

export default useUploadImage;
