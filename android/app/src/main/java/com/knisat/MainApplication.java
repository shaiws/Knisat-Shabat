package com.knisat;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.List;
import android.view.WindowManager;
import android.content.res.Configuration;
import android.util.DisplayMetrics;
import com.facebook.react.modules.i18nmanager.I18nUtil; //<== AmerllicA config

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    adjustFontScale(getApplicationContext(), getResources().getConfiguration());
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance(); // <== AmerllicA config
    sharedI18nUtilInstance.forceRTL(this, true); // <== AmerllicA config
    sharedI18nUtilInstance.allowRTL(this, true); // <== AmerllicA config
    SoLoader.init(this, /* native exopackage */ false);
  }

  public void adjustFontScale(Context context, Configuration configuration) {
    if (configuration.fontScale != 1) {
      configuration.fontScale = 1;
      DisplayMetrics metrics = context.getResources().getDisplayMetrics();
      WindowManager wm = (WindowManager) context.getSystemService(Context.WINDOW_SERVICE);
      wm.getDefaultDisplay().getMetrics(metrics);
      metrics.scaledDensity = configuration.fontScale * metrics.density;
      context.getResources().updateConfiguration(configuration, metrics);
    }
  }
}
