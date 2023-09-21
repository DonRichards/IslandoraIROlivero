<?php

namespace Drupal\FunctionalTests\Theme;

use Drupal\Tests\BrowserTestBase;

/**
 * Tests the IslandoraIROlivero theme.
 *
 * @group islandorairolivero
 */
class IslandoraIROliveroTest extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  protected static $modules = ['system', 'block'];

  /**
   * {@inheritdoc}
   *
   * It should eventually be possible to set this to 'islandorairolivero' once the theme
   * is in core.
   */
  protected $defaultTheme = 'stark';

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();

    // Install & set IslandoraIROlivero as default the theme.
    // Note: it should be possible to remove this once IslandoraIROlivero can be set as
    // the default theme above.
    $this->container->get('theme_installer')->install(['islandorairolivero'], TRUE);
    $system_theme_config = $this->container->get('config.factory')->getEditable('system.theme');
    $system_theme_config
      ->set('default', 'islandorairolivero')
      ->save();
  }

  /**
   * Tests that the IslandoraIROlivero theme always adds base library files.
   *
   * @see islandorairolivero.libraries.yml
   */
  public function testBaseLibraryAvailable() {
    $this->drupalGet('');
    $this->assertSession()->statusCodeEquals(200);
    $this->assertSession()->responseContains('islandorairolivero/css/base/base.css');
    $this->assertSession()->responseContains('islandorairolivero/js/scripts.js');
  }

  /**
   * Test IslandoraIROlivero's configuration schema.
   */
  public function testConfigSchema() {
    // Required configuration.
    $this->drupalGet('');
    $this->assertSession()->statusCodeEquals(200);
    $this->assertSession()->elementExists('css', '#block-islandorairolivero-content');
    $this->assertSession()->elementNotExists('css', '#block-islandorairolivero-search-form-wide');

    // Optional configuration.
    \Drupal::service('module_installer')->install(
      ['search', 'image', 'book', 'help', 'node']
    );
    $this->rebuildAll();
    $this->drupalLogin(
      $this->drupalCreateUser(['search content'])
    );

    // Confirm search block was installed.
    $this->assertSession()->elementExists('css', '#block-islandorairolivero-search-form-wide');
  }

  /**
   * Tests that the IslandoraIROlivero theme can be uninstalled.
   */
  public function testIsUninstallable() {
    $this->drupalLogin($this->drupalCreateUser(['access administration pages', 'administer themes']));

    $this->drupalGet('admin/appearance');
    $this->cssSelect('a[title="Install Bartik as default theme"]')[0]->click();
    $this->cssSelect('a[title="Uninstall IslandoraIROlivero theme"]')[0]->click();
    $this->assertText('The IslandoraIROlivero theme has been uninstalled.');
  }

}
